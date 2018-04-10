package ru.sbrf.ufs.app.testing.models.properties;

public class DateTimeProperty extends AbstractProperty {
    private static final String TYPE = "date-time";
    private static final Long DEFAULT_VALUE = 0L;

    public DateTimeProperty() {
        super(TYPE);
    }

    public DateTimeProperty(String name, String className) {
        super(name, className, TYPE);
    }

    @Override
    public Object getValue() {
        return DEFAULT_VALUE;
    }
}
