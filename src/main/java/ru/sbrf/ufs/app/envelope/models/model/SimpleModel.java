package ru.sbrf.ufs.app.envelope.models.model;

import ru.sbrf.ufs.app.envelope.models.description.Description;
import ru.sbrf.ufs.app.envelope.models.properties.Property;

import java.util.*;

public class SimpleModel extends AbstractModel {

    private SimpleModel(List<Object> example, Description description) {
        super(example, description);
    }

    public static class Builder extends AbstractBuilder {

        @Override
        public AbstractModel build() {
            List<Object> model = new ArrayList<>();

            if (description != null) {
                Collection<Property> properties = description.getProperties();
                Map<String, Object> object = new HashMap<>();
                if (properties != null && !properties.isEmpty()) {
                    for (Property property : properties) {
                        object.put(property.getName(), property.getValue());
                    }
                }

                model.add(description.getClassName());
                model.add(object);
            }

            example = new ArrayList<>();
            example.add(model);

            return new SimpleModel(example, description);
        }
    }
}
