package ru.sbrf.ufs.app.envelope.models.properties;

import java.util.ArrayList;
import java.util.List;

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
        List<Object> list = new ArrayList<>();
        list.add(getClassName());
        list.add(DEFAULT_VALUE);
        return list;
    }
}
