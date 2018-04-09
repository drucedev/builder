package ru.sbrf.ufs.app.testing.models.model;

import ru.sbrf.ufs.app.testing.models.description.Description;

import java.util.Map;

public abstract class AbstractModel implements Model {
    private final Map<String, Object> example;
    private final Description description;

    protected AbstractModel(Map<String, Object> example, Description description) {
        this.example = example;
        this.description = description;
    }

    @Override
    public Map<String, Object> getExample() {
        return example;
    }

    @Override
    public Description getDescription() {
        return description;
    }

    public abstract static class AbstractBuilder {
        Description description;
        Map<String, Object> example;

        public AbstractBuilder description(Description description) {
            this.description = description;

            return this;
        }

        public abstract AbstractModel build();
    }
}
