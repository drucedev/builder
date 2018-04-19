package ru.sbrf.ufs.app.envelope.models.properties;

public class StringProperty extends AbstractProperty {
    private static final String TYPE = "string";
    private static final String DEFAULT_VALUE = "abc";

    public StringProperty() {
        super(TYPE);
    }

    public StringProperty(String name, String className) {
        super(name, className, TYPE);
    }

    @Override
    public Object getValue() {
        return DEFAULT_VALUE;
    }
}
