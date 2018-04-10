package ru.sbrf.ufs.app.testing.models.properties;

import java.util.Objects;

public abstract class AbstractProperty implements Property {
    private final String type;

    private String className;
    private String name;

    AbstractProperty(String type) {
        this.type = type;
    }

    AbstractProperty(String type, String className, String name) {
        this.type = type;
        this.className = className;
        this.name = name;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public String getClassName() {
        return className;
    }

    @Override
    public String getType() {
        return type;
    }

    @Override
    public void setName(String name) {
        this.name = name;
    }

    @Override
    public void setClassName(String className) {
        this.className = className;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }

        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        AbstractProperty that = (AbstractProperty) o;
        return Objects.equals(getType(), that.getType()) &&
                Objects.equals(getClassName(), that.getClassName()) &&
                Objects.equals(getName(), that.getName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getType(), getClassName(), getName());
    }
}
