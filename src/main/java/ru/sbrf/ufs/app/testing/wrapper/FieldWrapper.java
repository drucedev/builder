package ru.sbrf.ufs.app.testing.wrapper;

import java.lang.reflect.Type;

public class FieldWrapper {
    private final String name;
    private final Class<?> type;
    private final Type genericType;

    public FieldWrapper(String name, Class<?> type, Type genericType) {
        this.name = name;
        this.type = type;
        this.genericType = genericType;
    }

    public String getName() {
        return name;
    }

    public Class<?> getType() {
        return type;
    }

    public Type getGenericType() {
        return genericType;
    }
}
