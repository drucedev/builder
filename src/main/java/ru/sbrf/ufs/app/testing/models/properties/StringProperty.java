package ru.sbrf.ufs.app.testing.models.properties;

public class StringProperty extends AbstractProperty {
    private static final String TYPE = "string";
    private static final String DEFAULT_VALUE = "abc";

    private StringProperty(String name, String className, String type) {
        super(name, className, type);
    }

    @Override
    public Object getValue() {
        return DEFAULT_VALUE;
    }

    public static class Builder extends AbstractBuilder {

        @Override
        protected AbstractProperty build() {
            return new StringProperty(name, className, TYPE);
        }
    }
}
