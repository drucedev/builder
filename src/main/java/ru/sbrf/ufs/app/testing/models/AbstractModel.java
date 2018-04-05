package ru.sbrf.ufs.app.testing.models;

import ru.sbrf.ufs.app.testing.models.properties.Property;

import java.util.Map;
import java.util.Set;

public abstract class AbstractModel implements Model {
    private final String className;
    private final Set<Property> properties;
    private final Map<String, Object> example;

    AbstractModel(String className, Set<Property> properties, Map<String, Object> example) {
        this.className = className;
        this.properties = properties;
        this.example = example;
    }

    @Override
    public String getClassName() {
        return className;
    }

    @Override
    public Set<Property> getProperties() {
        return properties;
    }

    @Override
    public Map<String, Object> getExample() {
        return example;
    }

    protected abstract static class AbstractBuilder {
        String className;
        Set<Property> properties;
        Map<String, Object> example;

        public AbstractBuilder setClassName(String className) {
            this.className = className;

            return this;
        }

        public AbstractBuilder setProperties(Set<Property> properties) {
            this.properties = properties;

            return this;
        }

        public AbstractBuilder setExample(Map<String, Object> example) {
            this.example = example;

            return this;
        }

        public abstract AbstractModel build();
    }
}
