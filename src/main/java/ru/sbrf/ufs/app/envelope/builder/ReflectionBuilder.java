package ru.sbrf.ufs.app.envelope.builder;

import org.springframework.context.ApplicationContext;
import ru.sbrf.bh.AbstractFine;
import ru.sbrf.ufs.app.envelope.models.description.Description;
import ru.sbrf.ufs.app.envelope.models.description.SimpleDescription;
import ru.sbrf.ufs.app.envelope.models.fg.FgMethod;
import ru.sbrf.ufs.app.envelope.models.fg.FgResponse;
import ru.sbrf.ufs.app.envelope.models.fg.FgService;
import ru.sbrf.ufs.app.envelope.models.model.Model;
import ru.sbrf.ufs.app.envelope.models.model.SimpleModel;
import ru.sbrf.ufs.app.envelope.models.properties.*;
import ru.sbrf.ufs.app.envelope.wrapper.FieldWrapper;
import sun.reflect.generics.reflectiveObjects.ParameterizedTypeImpl;

import java.lang.reflect.*;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.*;

public class ReflectionBuilder {

    private ReflectionBuilder() {
        // private
    }

    public static Collection<FgService> build(ApplicationContext context, String... excludeMethods) {
        return build(context, new HashSet<>(Arrays.asList(excludeMethods)));
    }

    private static Collection<FgService> build(ApplicationContext context, Set<String> excludeMethods) {
        Set<FgService> fgServices = new TreeSet<>(new FgService.NameComparator());

        Map<String, AbstractFine> services = context.getBeansOfType(AbstractFine.class);

        for (Map.Entry<String, AbstractFine> entry : services.entrySet()) {
            String name = entry.getKey();
            AbstractFine service = entry.getValue();

            Class<?> serviceClass = service.getClass();
            Method[] methods = serviceClass.getDeclaredMethods();

            Set<FgMethod> fgMethods = buildFgMethods(methods, excludeMethods);
            FgService fgService = new FgService.Builder()
                    .name(name)
                    .methods(fgMethods)
                    .build();

            fgServices.add(fgService);
        }

        return fgServices;
    }

    private static Set<FgMethod> buildFgMethods(Method[] methods, Set<String> excludeMethods) {
        Set<FgMethod> fgMethods = new TreeSet<>(new FgMethod.NameComparator());
        for (Method method : methods) {
            String name = method.getName();
            if (!excludeMethods.contains(name) && Modifier.isPublic(method.getModifiers())) {
                FgResponse fgResponse = buildFgResponse(method);
                Set<Model> requestParameters = buildRequestParameters(method);

                FgMethod fgMethod = new FgMethod.Builder()
                        .name(name)
                        .response(fgResponse)
                        .requestParameters(requestParameters)
                        .build();

                fgMethods.add(fgMethod);
            }
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
                Property property = buildProperty(new FieldWrapper(field.getName(), field.getType(), field.getGenericType()), Collections.<String>emptySet());
                properties.add(property);
            }
        }

        return new SimpleDescription.Builder()
                .className(className)
                .properties(properties)
                .build();
    }

    private static Property buildProperty(FieldWrapper fieldWrapper, Collection<String> path) {
        Class<?> type = fieldWrapper.getType();

        Property property;

        if (isBoolean(type)) {
            property = new BooleanProperty();
        } else if (isInteger(type)) {
            property = new IntegerProperty();
        } else if (isBigInteger(type)) {
            property = new BigIntegerProperty();
        } else if (isDecimal(type)) {
            property = new DecimalProperty();
        } else if (isBigDecimal(type)) {
            property = new BigDecimalProperty();
        } else if (isDate(type)) {
            property = new DateTimeProperty();
        } else if (isString(type)) {
            property = new StringProperty();
        } else if (isEnum(type)) {
            List<?> enumConstants = Arrays.asList(type.getEnumConstants());
            property = new EnumProperty(enumConstants);
        } else if (isArray(type)) {
            Class<?> parameterizedType = getParameterizedType(fieldWrapper);
            Property prop = buildProperty(new FieldWrapper(parameterizedType.getName(), parameterizedType, parameterizedType), path);
            Collection<Property> elements = Collections.singleton(prop);
            property = new ArrayProperty(elements);
        } else if (isCustomType(type)) {
            Collection<Property> subProperties = buildSubProperties(type, path);
            property = new ObjectProperty(subProperties);
        } else {
            property = new UntypedProperty();
        }

        property.setName(fieldWrapper.getName());
        property.setClassName(type.getName());

        return property;
    }

    private static Collection<Property> buildSubProperties(Class<?> type, Collection<String> path) {
        Collection<Property> subProperties = new HashSet<>();
        if (!Map.class.isAssignableFrom(type) && !Throwable.class.isAssignableFrom(type)) {
            Collection<Field> fields = getInheritedPrivateFields(type);
            for (Field subField : fields) {
                String subFieldName = subField.getName();
                if (!path.contains(subFieldName)) {
                    final Set<String> selfPath = new HashSet<>(path);
                    selfPath.add(subFieldName);
                    Property property = buildProperty(new FieldWrapper(subFieldName, subField.getType(), subField.getGenericType()), selfPath);
                    subProperties.add(property);
                }
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
                if (!field.isSynthetic() && !field.isEnumConstant() && !Modifier.isStatic(field.getModifiers())) {
                    fields.add(field);
                }
            }

            clazz = clazz.getSuperclass();
        }

        return fields;
    }

    private static Class<?> getParameterizedType(FieldWrapper field) {
        Class<?> fieldType = field.getType();
        Class<?> type;
        if (fieldType.isArray()) {
            type = fieldType.getComponentType();
        } else {
            ParameterizedType genericType = (ParameterizedType) field.getGenericType();
            Type actualTypeArgument = genericType.getActualTypeArguments()[0];
            type = actualTypeArgument instanceof ParameterizedTypeImpl
                    ? ((ParameterizedTypeImpl) actualTypeArgument).getRawType()
                    : (Class<?>) actualTypeArgument;
        }

        return type;
    }

    private static boolean isBoolean(Class<?> type) {
        return Boolean.class.isAssignableFrom(type);
    }

    private static boolean isBigInteger(Class<?> type) {
        return BigInteger.class.isAssignableFrom(type);
    }

    private static boolean isInteger(Class<?> type) {
        return Byte.class.isAssignableFrom(type) || Short.class.isAssignableFrom(type) ||
                Integer.class.isAssignableFrom(type) || Long.class.isAssignableFrom(type);
    }

    private static boolean isBigDecimal(Class<?> type) {
        return BigDecimal.class.isAssignableFrom(type);
    }

    private static boolean isDecimal(Class<?> type) {
        return Float.class.isAssignableFrom(type) || Double.class.isAssignableFrom(type);
    }

    private static boolean isDate(Class<?> type) {
        return Calendar.class.isAssignableFrom(type) || Date.class.isAssignableFrom(type);
    }

    private static boolean isString(Class<?> type) {
        return CharSequence.class.isAssignableFrom(type);
    }

    private static boolean isEnum(Class<?> type) {
        return type.isEnum();
    }

    private static boolean isArray(Class<?> type) {
        return type.isArray() || Iterable.class.isAssignableFrom(type);
    }

    private static boolean isCustomType(Class<?> type) {
        return type != null &&
                !Modifier.isAbstract(type.getModifiers())
                && !(type.getName().startsWith("java.") || type.getName().startsWith("javax."));
    }
}
