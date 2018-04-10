package ru.sbrf.ufs.app.testing.models.properties;

public class DateTimeProperty extends AbstractProperty {
    private static final String TYPE = "date-time";
    private static final Long DEFAULT_VALUE = 0L;

    private DateTimeProperty(String name, String className, String type) {
        super(name, className, type);
    }

    @Override
    public Object getValue() {
        return DEFAULT_VALUE;
    }

    public static class Builder extends AbstractBuilder {

        @Override
        public AbstractProperty build() {
            return new DateTimeProperty(name, className, TYPE);
        }
    }
}
