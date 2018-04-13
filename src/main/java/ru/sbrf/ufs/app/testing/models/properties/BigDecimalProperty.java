package ru.sbrf.ufs.app.testing.models.properties;

import java.util.ArrayList;
import java.util.List;

public class BigDecimalProperty extends DecimalProperty {

    public BigDecimalProperty() {
        super();
    }

    @Override
    public Object getValue() {
        List<Object> list = new ArrayList<>();
        list.add(getClassName());
        list.add(super.getValue());
        return list;
    }
}
