package ru.sbrf.ufs.app.testing.models.properties;

public class BooleanProperty extends AbstractProperty {
    private static final String TYPE = "boolean";
    private static final Boolean DEFAULT_VALUE = Boolean.FALSE;

    private BooleanProperty(String name, String className, String type) {
        super(name, className, type);
    }

    @Override
    public Object getValue() {
        return DEFAULT_VALUE;
    }

    public static class Builder extends AbstractBuilder {

        @Override
        protected AbstractProperty build() {
            return new BooleanProperty(name, className, TYPE);
        }
    }
}
