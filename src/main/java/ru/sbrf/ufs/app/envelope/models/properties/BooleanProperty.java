package ru.sbrf.ufs.app.envelope.models.properties;

public class BooleanProperty extends AbstractProperty {
    private static final String TYPE = "boolean";
    private static final Boolean DEFAULT_VALUE = Boolean.FALSE;

    public BooleanProperty() {
        super(TYPE);
    }

    public BooleanProperty(String name, String className) {
        super(name, className, TYPE);
    }

    @Override
    public Object getValue() {
        return DEFAULT_VALUE;
    }
}
