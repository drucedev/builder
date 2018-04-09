package ru.sbrf.ufs.app.testing.models.model;

import ru.sbrf.ufs.app.testing.models.description.Description;
import ru.sbrf.ufs.app.testing.models.properties.Property;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

public class SimpleModel extends AbstractModel {

    private SimpleModel(Map<String, Object> example, Description description) {
        super(example, description);
    }

    public static class Builder extends AbstractBuilder {

        @Override
        public AbstractModel build() {
            if (description != null) {
                Collection<Property> properties = description.getProperties();
                if (properties != null && !properties.isEmpty()) {
                    example = new HashMap<>();
                    for (Property property : properties) {
                        example.put(property.getName(), property.getValue());
                    }
                }
            }

            return new SimpleModel(example, description);
        }
    }
}
