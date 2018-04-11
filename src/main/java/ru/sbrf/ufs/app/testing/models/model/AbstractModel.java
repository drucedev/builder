package ru.sbrf.ufs.app.testing.models.model;

import ru.sbrf.ufs.app.testing.models.description.Description;

import java.util.List;

public abstract class AbstractModel implements Model {
    private final List<Object> example;
    private final Description description;

    protected AbstractModel(List<Object> example, Description description) {
        this.example = example;
        this.description = description;
    }

    @Override
    public List<Object> getExample() {
        return example;
    }

    @Override
    public Description getDescription() {
        return description;
    }

    public abstract static class AbstractBuilder {
        Description description;
        List<Object> example;

        public AbstractBuilder description(Description description) {
            this.description = description;

            return this;
        }

        public abstract AbstractModel build();
    }
}
