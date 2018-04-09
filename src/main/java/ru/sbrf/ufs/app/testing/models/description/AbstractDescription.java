package ru.sbrf.ufs.app.testing.models.description;

import ru.sbrf.ufs.app.testing.models.properties.Property;

import java.util.Set;

public abstract class AbstractDescription implements Description {
    private final String className;
    private final Set<Property> properties;

    protected AbstractDescription(String className, Set<Property> properties) {
        this.className = className;
        this.properties = properties;
    }

    @Override
    public String getClassName() {
        return className;
    }

    @Override
    public Set<Property> getProperties() {
        return properties;
    }

    public abstract static class AbstractBuilder {
        String className;
        Set<Property> properties;

        public AbstractBuilder className(String className) {
            this.className = className;

            return this;
        }

        public AbstractBuilder properties(Set<Property> properties) {
            this.properties = properties;

            return this;
        }

        public abstract AbstractDescription build();
    }
}
