package ru.sbrf.ufs.app.testing.models.properties;

public class UntypedProperty extends AbstractProperty {
    private static final String TYPE = null;
    private static final Object DEFAULT_VALUE = null;

    private UntypedProperty(String name, String className, String type) {
        super(name, className, type);
    }

    @Override
    public Object getValue() {
        return DEFAULT_VALUE;
    }

    public static class Builder extends AbstractBuilder {

        @Override
        public AbstractProperty build() {
            return new UntypedProperty(name, className, TYPE);
        }
    }
}
