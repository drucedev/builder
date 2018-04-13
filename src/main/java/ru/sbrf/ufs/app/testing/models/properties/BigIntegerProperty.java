package ru.sbrf.ufs.app.testing.models.properties;

import java.util.ArrayList;
import java.util.List;

public class BigIntegerProperty extends AbstractProperty {
    private static final String TYPE = "big-integer";
    private static final Integer DEFAULT_VALUE = 0;

    public BigIntegerProperty() {
        super(TYPE);
    }

    @Override
    public Object getValue() {
        List<Object> list = new ArrayList<>();
        list.add(getClassName());
        list.add(DEFAULT_VALUE);
        return list;
    }
}
