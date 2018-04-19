package ru.sbrf.ufs.app.envelope.models.properties;

import java.util.ArrayList;
import java.util.List;

public class BigIntegerProperty extends IntegerProperty {

    public BigIntegerProperty() {
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
