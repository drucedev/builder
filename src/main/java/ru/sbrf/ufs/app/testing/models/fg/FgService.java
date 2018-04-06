package ru.sbrf.ufs.app.testing.models.fg;

import java.util.Collection;

public class FgService {
    private final String name;
    private final Collection<FgMethod> methods;

    public FgService(String name, Collection<FgMethod> methods) {
        this.name = name;
        this.methods = methods;
    }

    public String getName() {
        return name;
    }

    public Collection<FgMethod> getMethods() {
        return methods;
    }

    public static class Builder {
        private String name;
        private Collection<FgMethod> methods;

        public Builder name(String name) {
            this.name = name;

            return this;
        }

        public Builder methods(Collection<FgMethod> methods) {
            this.methods = methods;

            return this;
        }

        public FgService build() {
            return new FgService(name, methods);
        }
    }
}
