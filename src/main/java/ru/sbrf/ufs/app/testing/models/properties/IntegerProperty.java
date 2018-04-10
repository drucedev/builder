package ru.sbrf.ufs.app.testing.models.properties;

public class IntegerProperty extends AbstractProperty {
    private static final String TYPE = "integer";
    private static final Integer DEFAULT_VALUE = 0;

    public IntegerProperty() {
        super(TYPE);
    }

    public IntegerProperty(String name, String className) {
        super(name, className, TYPE);
    }

    @Override
    public Object getValue() {
        return DEFAULT_VALUE;
    }
}
