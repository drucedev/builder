package ru.sbrf.ufs.app.testing.builder;

import org.springframework.context.ApplicationContext;
import ru.sbrf.bh.AbstractFine;
import ru.sbrf.ufs.app.testing.models.description.Description;
import ru.sbrf.ufs.app.testing.models.description.SimpleDescription;
import ru.sbrf.ufs.app.testing.models.fg.FgMethod;
import ru.sbrf.ufs.app.testing.models.fg.FgResponse;
import ru.sbrf.ufs.app.testing.models.fg.FgService;
import ru.sbrf.ufs.app.testing.models.model.Model;
import ru.sbrf.ufs.app.testing.models.model.SimpleModel;
import ru.sbrf.ufs.app.testing.models.properties.*;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.util.*;

public class ReflectionBuilder {
    private ReflectionBuilder() {
        //private
    }

    public static Collection<FgService> build(ApplicationContext context) {
        Collection<FgService> fgServices = new ArrayList<>();

        Map<String, AbstractFine> services = context.getBeansOfType(AbstractFine.class);

        for (Map.Entry<String, AbstractFine> entry : services.entrySet()) {
            String name = entry.getKey();
            AbstractFine service = entry.getValue();

            Class<?> serviceClass = service.getClass();
            Method[] methods = serviceClass.getDeclaredMethods();

            Set<FgMethod> fgMethods = buildFgMethods(methods);
            FgService fgService = new FgService.Builder()
                    .name(name)
                    .methods(fgMethods)
                    .build();

            fgServices.add(fgService);
        }

        return fgServices;
    }

    private static Set<FgMethod> buildFgMethods(Method[] methods) {
        Set<FgMethod> fgMethods = new HashSet<>();
        for (Method method : methods) {
            String name = method.getName();
            FgResponse fgResponse = buildFgResponse(method);
            Set<Model> requestParameters = buildRequestParameters(method);

            FgMethod fgMethod = new FgMethod.Builder()
                    .name(name)
                    .response(fgResponse)
                    .requestParameters(requestParameters)
                    .build();

            fgMethods.add(fgMethod);
        }

        return fgMethods;
    }

    private static FgResponse buildFgResponse(Method method) {
        Class<?>[] exceptionTypes = method.getExceptionTypes();
        Set<String> errors = new HashSet<>();
        for (Class<?> exceptionType : exceptionTypes) {
            errors.add(exceptionType.getName());
        }

        Model model = buildModel(method.getReturnType());

        return new FgResponse.Builder()
                .model(model)
                .exceptions(errors)
                .build();
    }

    private static Set<Model> buildRequestParameters(Method method) {
        Set<Model> requestParameters = new HashSet<>();

        Class<?>[] parameterTypes = method.getParameterTypes();
        for (Class<?> parameterType : parameterTypes) {
            Model model = buildModel(parameterType);
            requestParameters.add(model);
        }

        return requestParameters;
    }

    private static Model buildModel(Class<?> type) {
        Description description = buildDescription(type);
        return new SimpleModel.Builder()
                .description(description)
                .build();
    }

    private static Description buildDescription(Class<?> type) {
        String className = type.getName();

        Set<Property> properties = new HashSet<>();
        Collection<Field> fields = getInheritedPrivateFields(type);
        for (Field field : fields) {
            if (!field.isSynthetic()) {
                Property property = buildProperty(field);
                properties.add(property);
            }
        }

        return new SimpleDescription.Builder()
                .className(className)
                .properties(properties)
                .build();
    }

    private static Property buildProperty(Field field) {
        Class<?> fieldType = field.getType();

        if (Boolean.class.isAssignableFrom(fieldType)) {
            return new BooleanProperty.Builder()
                    .name(field.getName())
                    .className(fieldType.getName())
                    .build();
        } else if (isInteger(fieldType)) {
            return new IntegerProperty.Builder()
                    .name(field.getName())
                    .className(fieldType.getName())
                    .build();
        } else if (isDecimal(fieldType)) {
            return new DecimalProperty.Builder()
                    .name(field.getName())
                    .className(fieldType.getName())
                    .build();
        } else if (isDate(fieldType)) {
            return new DateTimeProperty.Builder()
                    .name(field.getName())
                    .className(fieldType.getName())
                    .build();
        } else if (fieldType.isAssignableFrom(CharSequence.class)) {
            return new StringProperty.Builder()
                    .name(field.getName())
                    .className(fieldType.getName())
                    .build();
        } else if (isArray(fieldType)) {
            Class<?> parameterizedType = getParameterizedType(field);
            Collection<Property> subProperties = buildSubProperties(parameterizedType);
            Property property = new ObjectProperty.Builder()
                    .properties(subProperties)
                    .name(null)
                    .className(parameterizedType.getName())
                    .build();
            Collection<Property> elements = Collections.singleton(property);

            return new ArrayProperty.Builder()
                    .elements(elements)
                    .name(field.getName())
                    .className(fieldType.getName())
                    .build();
        } else if (Object.class.isAssignableFrom(fieldType)) {
            Collection<Property> subProperties = buildSubProperties(fieldType);

            return new ObjectProperty.Builder()
                    .properties(subProperties)
                    .name(field.getName())
                    .className(fieldType.getName())
                    .build();
        }

        return new UntypedProperty.Builder()
                .name(field.getName())
                .className(fieldType.getName())
                .build();
    }

    private static Collection<Property> buildSubProperties(Class<?> type) {
        Collection<Property> subProperties = new HashSet<>();
        if (!Map.class.isAssignableFrom(type)) {
            Collection<Field> fields = getInheritedPrivateFields(type);
            for (Field subField : fields) {
                Property property = buildProperty(subField);
                subProperties.add(property);
            }
        }

        return subProperties;
    }

    private static Collection<Field> getInheritedPrivateFields(Class<?> type) {
        List<Field> fields = new ArrayList<>();

        Class<?> clazz = type;
        while (clazz != null && clazz != Object.class) {
            Field[] declaredFields = clazz.getDeclaredFields();
            for (Field field : declaredFields) {
                if (!field.isSynthetic()) {
                    fields.add(field);
                }
            }

            clazz = clazz.getSuperclass();
        }

        return fields;
    }

    private static Class<?> getParameterizedType(Field field) {
        Class<?> fieldType = field.getType();
        Class<?> type;
        if (fieldType.isArray()) {
            type = fieldType.getComponentType();
        } else {
            ParameterizedType genericType = (ParameterizedType) field.getGenericType();
            type = (Class<?>) genericType.getActualTypeArguments()[0];
        }

        return type;
    }

    private static boolean isInteger(Class<?> type) {
        return Byte.class.isAssignableFrom(type) || Short.class.isAssignableFrom(type) ||
                Integer.class.isAssignableFrom(type) || Long.class.isAssignableFrom(type);
    }

    private static boolean isDecimal(Class<?> type) {
        return Float.class.isAssignableFrom(type) || Double.class.isAssignableFrom(type);
    }

    private static boolean isDate(Class<?> type) {
        return Calendar.class.isAssignableFrom(type) || Date.class.isAssignableFrom(type);
    }

    private static boolean isArray(Class<?> type) {
        return type.isArray() || Iterable.class.isAssignableFrom(type);
    }
}
