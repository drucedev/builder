package ru.sbrf.ufs.app.testing.models;

import ru.sbrf.ufs.app.testing.models.properties.Property;

import java.util.Map;
import java.util.Set;

public interface Model {
    String getClassName();

    Set<Property> getProperties();

    Map<String, Object> getExample();
}
