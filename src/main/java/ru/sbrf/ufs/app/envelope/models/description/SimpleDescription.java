package ru.sbrf.ufs.app.envelope.models.description;

import ru.sbrf.ufs.app.envelope.models.properties.Property;

import java.util.Set;

public class SimpleDescription extends AbstractDescription {

    private SimpleDescription(String className, Set<Property> properties) {
        super(className, properties);
    }

    public static class Builder extends AbstractBuilder {

        @Override
        public AbstractDescription build() {
            return new SimpleDescription(className, properties);
        }
    }
}
