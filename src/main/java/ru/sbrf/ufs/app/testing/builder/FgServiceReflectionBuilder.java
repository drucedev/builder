package ru.sbrf.ufs.app.testing.builder;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.context.ApplicationContext;
import ru.sbrf.bh.AbstractFine;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.util.Map;

public class FgServiceReflectionBuilder {
    private static final String FIELD_NAME = "name";
    private static final String FIELD_REQUEST = "request";
    private static final String FIELD_METHODS = "methods";

    private ApplicationContext context;
    private ObjectMapper mapper;

    private FgServiceReflectionBuilder() {
        //builder
    }

    public static FgServiceReflectionBuilder newInstance() {
        return new FgServiceReflectionBuilder();
    }

    public FgServiceReflectionBuilder context(ApplicationContext context) {
        this.context = context;

        return this;
    }

    public FgServiceReflectionBuilder mapper(ObjectMapper mapper) {
        this.mapper = mapper;

        return this;
    }

    public Object build() throws JsonProcessingException {
        ArrayNode serviceNodes = mapper.createArrayNode();

        Map<String, AbstractFine> services = context.getBeansOfType(AbstractFine.class);
        for (Map.Entry<String, AbstractFine> entry : services.entrySet()) {
            AbstractFine service = entry.getValue();
            Method[] methods = service.getClass().getDeclaredMethods();
            serviceNodes.add(createServiceNode(entry.getKey(), methods));
        }

        return mapper.writerWithDefaultPrettyPrinter().writeValueAsString(serviceNodes);
    }

    private ObjectNode createServiceNode(String key, Method[] methods) {
        ObjectNode serviceNode = mapper.createObjectNode();
        serviceNode.put(FIELD_NAME, key);

        ArrayNode methodNodes = mapper.createArrayNode();

        for (Method method : methods) {
            ObjectNode methodNode = mapper.createObjectNode();
            methodNode.put(FIELD_NAME, method.getName());

            ArrayNode requestNodes = mapper.createArrayNode();

            Class<?>[] parameterTypes = method.getParameterTypes();
            for (Class<?> parameterType : parameterTypes) {
                requestNodes.add(createRequestNode(parameterType));
            }

            methodNode.set(FIELD_REQUEST, requestNodes);

            methodNodes.add(methodNode);
        }

        serviceNode.set(FIELD_METHODS, methodNodes);

        return serviceNode;
    }

    private JsonNode createRequestNode(Class<?> parameterType) {
        ObjectNode requestNode = mapper.createObjectNode();
        for (Field field : parameterType.getDeclaredFields()) {
            Class<?> type = field.getType();

            if (!field.isSynthetic()) {
                if (type.isPrimitive()) {
                    requestNode.put(field.getName(), 0);
                } else if (type.isArray() || Iterable.class.isAssignableFrom(type)) {
                    requestNode.set(field.getName(), createArrayNode(field));
                } else if (type.getName().startsWith("java.") || type.isEnum()) {
                    requestNode.put(field.getName(), "");
                } else {
                    requestNode.set(field.getName(), createRequestNode(type));
                }
            }
        }

        return requestNode;
    }

    private JsonNode createArrayNode(Field field) {
        ArrayNode arrayNode = mapper.createArrayNode();

        Class<?> fieldType = field.getType();
        Class<?> type;
        if (fieldType.isArray()) {
            type = fieldType.getComponentType();
        } else {
            ParameterizedType genericType = (ParameterizedType) field.getGenericType();
            type = (Class<?>) genericType.getActualTypeArguments()[0];
        }

        arrayNode.add(createRequestNode(type));

        return arrayNode;
    }

}
