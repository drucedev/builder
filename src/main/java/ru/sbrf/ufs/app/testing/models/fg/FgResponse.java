package ru.sbrf.ufs.app.testing.models.fg;

import ru.sbrf.ufs.app.testing.models.Model;

import java.util.Collection;

public class FgResponse {
    private final Model success;
    private final Collection<String> exceptions;

    private FgResponse(Model success, Collection<String> exceptions) {
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
        private Collection<String> exceptions;

        public Builder model(Model model) {
            this.model = model;

            return this;
        }

        public Builder exceptions(Collection<String> exceptions) {
            this.exceptions = exceptions;

            return this;
        }

        public FgResponse build() {
            return new FgResponse(model, exceptions);
        }
    }
}
