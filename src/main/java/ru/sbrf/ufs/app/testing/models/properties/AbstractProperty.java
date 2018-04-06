package ru.sbrf.ufs.app.testing.models.properties;

public abstract class AbstractProperty implements Property {
    private final String name;
    private final String className;
    private final String type;

    AbstractProperty(String name, String className, String type) {
        this.name = name;
        this.className = className;
        this.type = type;
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

    protected abstract static class AbstractBuilder {
        String name;
        String className;

        protected AbstractBuilder name(String name) {
            this.name = name;

            return this;
        }

        protected AbstractBuilder className(String className) {
            this.className = className;

            return this;
        }

        protected abstract AbstractProperty build();
    }
}
