package ru.sbrf.ufs.app.testing.models.properties;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

public class ArrayProperty extends AbstractProperty {
    private static final String TYPE = "array";

    private Collection<Property> elements;

    public ArrayProperty() {
        super(TYPE);
    }

    public ArrayProperty(Collection<Property> elements) {
        super(TYPE);
        this.elements = elements;
    }

    public void setElements(Collection<Property> elements) {
        this.elements = elements;
    }

    @Override
    public Object getValue() {
        Collection<Object> values = new ArrayList<>();
        if (elements != null && !elements.isEmpty()) {
            for (Property property : elements) {
                values.add(property.getValue());
            }
        }

        List<Object> list = new ArrayList<>();
        list.add(ArrayList.class.getName());
        list.add(values);

        return list;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }

        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        if (!super.equals(o)) {
            return false;
        }

        ArrayProperty that = (ArrayProperty) o;
        return Objects.equals(elements, that.elements);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), elements);
    }
}
