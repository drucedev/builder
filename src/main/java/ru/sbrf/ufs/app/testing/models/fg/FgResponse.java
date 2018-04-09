package ru.sbrf.ufs.app.testing.models.fg;

import ru.sbrf.ufs.app.testing.models.model.Model;

import java.util.Collection;
import java.util.Set;

public class FgResponse {
    private final Model success;
    private final Set<String> exceptions;

    private FgResponse(Model success, Set<String> exceptions) {
        this.success = success;
        this.exceptions = exceptions;
    }

    public Model getSuccess() {
        return success;
    }

    public Collection<String> getExceptions() {
        return exceptions;
    }

    public static class Builder {
        private Model model;
        private Set<String> exceptions;

        public Builder model(Model model) {
            this.model = model;

            return this;
        }

        public Builder exceptions(Set<String> exceptions) {
            this.exceptions = exceptions;

            return this;
        }

        public FgResponse build() {
            return new FgResponse(model, exceptions);
        }
    }
}
