package ru.sbrf.ufs.app.testing.models.properties;

public class UntypedProperty extends AbstractProperty {
    private static final String TYPE = null;
    private static final Object DEFAULT_VALUE = null;

    public UntypedProperty() {
        super(TYPE);
    }

    public UntypedProperty(String name, String className) {
        super(name, className, TYPE);
    }

    @Override
    public Object getValue() {
        return DEFAULT_VALUE;
    }
}
