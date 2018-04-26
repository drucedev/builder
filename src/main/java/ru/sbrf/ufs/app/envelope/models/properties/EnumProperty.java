package ru.sbrf.ufs.app.envelope.models.properties;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;
import java.util.Objects;

public class EnumProperty extends StringProperty {
    private final List<?> values;

    public EnumProperty(List<?> values) {
        super();
        this.values = values;
    }

    public EnumProperty(String name, String className, List<?> values) {
        super(name, className);
        this.values = values;
    }

    @Override
    @JsonIgnore
    public Object getValue() {
        return values.isEmpty() ? super.getValue() : values.get(0);
    }

    public List getValues() {
        return values;
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

        EnumProperty that = (EnumProperty) o;

        return Objects.equals(getValues(), that.getValues());
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), getValues());
    }
}
