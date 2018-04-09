package ru.sbrf.ufs.app.testing.models.fg;

import java.util.Collection;
import java.util.Set;

public class FgService {
    private final String name;
    private final Set<FgMethod> methods;

    public FgService(String name, Set<FgMethod> methods) {
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
        private Set<FgMethod> methods;

        public Builder name(String name) {
            this.name = name;

            return this;
        }

        public Builder methods(Set<FgMethod> methods) {
            this.methods = methods;

            return this;
        }

        public FgService build() {
            return new FgService(name, methods);
        }
    }
}
