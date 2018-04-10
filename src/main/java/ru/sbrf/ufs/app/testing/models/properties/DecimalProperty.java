package ru.sbrf.ufs.app.testing.models.properties;

public class DecimalProperty extends AbstractProperty {
    private static final String TYPE = "decimal";
    private static final Float DEFAULT_VALUE = 0f;

    private DecimalProperty(String name, String className, String type) {
        super(name, className, type);
    }

    @Override
    public Object getValue() {
        return DEFAULT_VALUE;
    }

    public static class Builder extends AbstractBuilder {

        @Override
        public AbstractProperty build() {
            return new DecimalProperty(name, className, TYPE);
        }
    }
}
