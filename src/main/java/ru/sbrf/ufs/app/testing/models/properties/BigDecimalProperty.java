package ru.sbrf.ufs.app.testing.models.properties;

import java.util.ArrayList;
import java.util.List;

public class BigDecimalProperty extends AbstractProperty {
    private static final String TYPE = "big-decimal";
    private static final Float DEFAULT_VALUE = 0f;

    public BigDecimalProperty() {
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
