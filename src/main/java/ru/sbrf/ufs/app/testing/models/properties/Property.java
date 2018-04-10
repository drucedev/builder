package ru.sbrf.ufs.app.testing.models.properties;

public interface Property {
    String getName();

    String getClassName();

    String getType();

    Object getValue();

    void setName(String name);

    void setClassName(String className);
}
