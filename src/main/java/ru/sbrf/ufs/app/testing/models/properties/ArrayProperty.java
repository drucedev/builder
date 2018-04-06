package ru.sbrf.ufs.app.testing.models.properties;

import java.util.ArrayList;
import java.util.Collection;

public class ArrayProperty extends AbstractProperty {
    private static final String TYPE = "array";

    private final Collection<Property> elements;

    private ArrayProperty(String name, String className, String type, Collection<Property> elements) {
        super(name, className, type);
        this.elements = elements;
    }

    @Override
    public Object getValue() {
        Collection<Object> values = new ArrayList<>();
        for (Property property : elements) {
            values.add(property.getValue());
        }

        return values;
    }

    public static class Builder extends AbstractBuilder {
        private Collection<Property> elements;

        public void elements(Collection<Property> elements) {
            this.elements = elements;
        }

        @Override
        protected AbstractProperty build() {
            return new ArrayProperty(name, className, TYPE, elements);
        }
    }
}
