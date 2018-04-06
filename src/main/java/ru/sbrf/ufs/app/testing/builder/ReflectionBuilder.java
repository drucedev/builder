package ru.sbrf.ufs.app.testing.builder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;
import ru.sbrf.bh.AbstractFine;
import ru.sbrf.ufs.app.testing.models.Model;
import ru.sbrf.ufs.app.testing.models.fg.FgMethod;
import ru.sbrf.ufs.app.testing.models.fg.FgResponse;
import ru.sbrf.ufs.app.testing.models.fg.FgService;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;

@Component
public class ReflectionBuilder {
    private final Collection<FgService> fgServices;

    @Autowired
    private ReflectionBuilder(ApplicationContext context) {
        this.fgServices = build(context);
    }

    public Collection<FgService> getFgServices() {
        return fgServices;
    }

    private static Collection<FgService> build(ApplicationContext context) {
        Collection<FgService> fgServices = new ArrayList<>();

        Map<String, AbstractFine> services = context.getBeansOfType(AbstractFine.class);

        for (Map.Entry<String, AbstractFine> entry : services.entrySet()) {
            String name = entry.getKey();
            AbstractFine service = entry.getValue();

            Class<?> serviceClass = service.getClass();
            Method[] methods = serviceClass.getDeclaredMethods();

            Collection<FgMethod> fgMethods = buildFgMethods(methods);
            FgService fgService = new FgService.Builder()
                    .name(name)
                    .methods(fgMethods)
                    .build();

            fgServices.add(fgService);
        }

        return fgServices;
    }

    private static Collection<FgMethod> buildFgMethods(Method[] methods) {
        Collection<FgMethod> fgMethods = new ArrayList<>();
        for (Method method : methods) {
            String name = method.getName();
            FgResponse fgResponse = buildFgResponse(method);
            Collection<Model> requestParameters = buildRequestParameters(method);

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
        Collection<String> errors = new ArrayList<>();
        for (Class<?> exceptionType : exceptionTypes) {
            errors.add(exceptionType.getName());
        }

        return new FgResponse.Builder()
                //.model()
                .exceptions(errors)
                .build();
    }

    private static Collection<Model> buildRequestParameters(Method method) {
        Collection<Model> requestParameters = new ArrayList<>();

        Class<?>[] parameterTypes = method.getParameterTypes();
        for (Class<?> parameterType : parameterTypes) {

        }

        return requestParameters;
    }

    //    private JsonNode createRequestNode(Class<?> parameterType) {
    //        ObjectNode requestNode = mapper.createObjectNode();
    //        for (Field field : parameterType.getDeclaredFields()) {
    //            Class<?> type = field.getType();
    //
    //            if (!field.isSynthetic()) {
    //                if (type.isPrimitive()) {
    //                    requestNode.put(field.getName(), 0);
    //                } else if (type.isArray() || Iterable.class.isAssignableFrom(type)) {
    //                    requestNode.set(field.getName(), createArrayNode(field));
    //                } else if (type.getName().startsWith("java.") || type.isEnum()) {
    //                    requestNode.put(field.getName(), "");
    //                } else {
    //                    requestNode.set(field.getName(), createRequestNode(type));
    //                }
    //            }
    //        }
    //
    //        return requestNode;
    //    }
    //
    //    private JsonNode createArrayNode(Field field) {
    //        ArrayNode arrayNode = mapper.createArrayNode();
    //
    //        Class<?> fieldType = field.getType();
    //        Class<?> type;
    //        if (fieldType.isArray()) {
    //            type = fieldType.getComponentType();
    //        } else {
    //            ParameterizedType genericType = (ParameterizedType) field.getGenericType();
    //            type = (Class<?>) genericType.getActualTypeArguments()[0];
    //        }
    //
    //        arrayNode.add(createRequestNode(type));
    //
    //        return arrayNode;
    //    }

}
