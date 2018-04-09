package ru.sbrf.ufs.app.testing.models.model;

import ru.sbrf.ufs.app.testing.models.description.Description;

import java.util.Map;

public interface Model {
    Description getDescription();

    Map<String, Object> getExample();
}
