package ru.sbrf.ufs.app.testing.models.model;

import ru.sbrf.ufs.app.testing.models.description.Description;

import java.util.List;

public interface Model {
    Description getDescription();

    List<Object> getExample();
}
