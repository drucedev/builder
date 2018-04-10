package ru.sbrf.ufs.app.testing.models.properties;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

public class ObjectProperty extends AbstractProperty {
    private static final String TYPE = "object";

    private final Collection<Property> properties;

    private ObjectProperty(String name, String className, String type, Collection<Property> properties) {
        super(name, className, type);
        this.properties = properties;
    }

    @Override
    public Object getValue() {
        Map<String, Object> map = new HashMap<>();
        for (Property property : properties) {
            map.put(property.getName(), property.getValue());
        }

        return map;
    }

    public static class Builder extends AbstractBuilder {
        private Collection<Property> properties;

        public Builder properties(Collection<Property> properties) {
            this.properties = properties;

            return this;
        }

        @Override
        public AbstractProperty build() {
            return new ObjectProperty(name, className, TYPE, properties);
        }
    }
}
