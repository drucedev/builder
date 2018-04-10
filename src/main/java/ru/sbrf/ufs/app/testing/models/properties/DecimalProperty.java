package ru.sbrf.ufs.app.testing.models.properties;

public class DecimalProperty extends AbstractProperty {
    private static final String TYPE = "decimal";
    private static final Float DEFAULT_VALUE = 0f;

    public DecimalProperty() {
        super(TYPE);
    }

    public DecimalProperty(String name, String className) {
        super(name, className, TYPE);
    }

    @Override
    public Object getValue() {
        return DEFAULT_VALUE;
    }
}
