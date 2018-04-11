package ru.sbrf.ufs.app.testing.models.properties;

import java.util.*;

public class ObjectProperty extends AbstractProperty {
    private static final String TYPE = "object";

    private Collection<Property> properties;

    public ObjectProperty() {
        super(TYPE);
    }

    public ObjectProperty(Collection<Property> properties) {
        super(TYPE);
        this.properties = properties;
    }

    public void setProperties(Collection<Property> properties) {
        this.properties = properties;
    }

    @Override
    public Object getValue() {
        Map<String, Object> map = new HashMap<>();
        if (properties != null && !properties.isEmpty()) {
            for (Property property : properties) {
                map.put(property.getName(), property.getValue());
            }
        }

        List<Object> list = new ArrayList<>();
        list.add(getClassName());
        list.add(map);

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

        ObjectProperty that = (ObjectProperty) o;
        return Objects.equals(properties, that.properties);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), properties);
    }
}
