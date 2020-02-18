'use strict';

class Pluralizer {
    constructor() {
        this.configurations = [];
    }

    /**
     * Adicionar configuração de pluralização.
     */
    addRule(configuration) {
        let {suffixes, handler} = configuration;
        suffixes = Array.isArray(suffixes) ? suffixes : [];
        const hasSuffixes = suffixes.length > 0;
        const handlerIsFunction = typeof handler === 'function';

        if (hasSuffixes && handlerIsFunction) {
            this.configurations.push({
                suffixes,
                handler,
            });
        }
    }

    /**
     * Pluralizar plavra com base nas configurações.
     */
    pluralize(noun, count) {
        if (count < 2) return word;

        for (let configuration of this.configurations) {
            const match = configuration.suffixes.some((suffix) => {
                return noun.endsWith(suffix);
            });

            if (match) {
                return configuration.handler(noun);
            }
        }

        return word + 's';
    }
}

module.exports = Pluralizer;