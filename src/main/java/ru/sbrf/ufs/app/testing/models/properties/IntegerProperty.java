package ru.sbrf.ufs.app.testing.models.properties;

public class IntegerProperty extends AbstractProperty {
    private static final String TYPE = "integer";
    private static final Integer DEFAULT_VALUE = 0;

    private IntegerProperty(String name, String className, String type) {
        super(name, className, type);
    }

    @Override
    public Object getValue() {
        return DEFAULT_VALUE;
    }

    public static class Builder extends AbstractBuilder {

        @Override
        protected AbstractProperty build() {
            return new IntegerProperty(name, className, TYPE);
        }
    }
}
