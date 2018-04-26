package ru.sbrf.ufs.app.envelope.models.model;

import ru.sbrf.ufs.app.envelope.models.description.Description;

import java.util.List;

public interface Model {
    Description getDescription();

    List<Object> getExample();
}
