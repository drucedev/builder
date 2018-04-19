package ru.sbrf.ufs.app.envelope.models.description;

import ru.sbrf.ufs.app.envelope.models.properties.Property;

import java.util.Set;

public interface Description {
    String getClassName();

    Set<Property> getProperties();
}
