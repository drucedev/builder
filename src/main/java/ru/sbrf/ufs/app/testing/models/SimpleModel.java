package ru.sbrf.ufs.app.testing.models;

import ru.sbrf.ufs.app.testing.models.properties.Property;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class SimpleModel extends AbstractModel {

    private SimpleModel(String className, Set<Property> properties, Map<String, Object> example) {
        super(className, properties, example);
    }

    public static class Builder extends AbstractBuilder {

        @Override
        public AbstractModel build() {
            if (properties != null && !properties.isEmpty()) {
                example = new HashMap<>();
                for (Property property : properties) {
                    example.put(property.getName(), property.getValue());
                }
            }

            return new SimpleModel(className, properties, example);
        }
    }
}
