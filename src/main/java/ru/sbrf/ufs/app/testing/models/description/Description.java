package ru.sbrf.ufs.app.testing.models.description;

import ru.sbrf.ufs.app.testing.models.properties.Property;

import java.util.Set;

public interface Description {
    String getClassName();

    Set<Property> getProperties();
}
