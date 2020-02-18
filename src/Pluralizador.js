'use strict';

class Pluralizer {
    constructor() {
        this.rules = [];
    }

    /**
     * Adicionar configuração de pluralização.
     */
    addRule(rule) {
        let {suffixes, handler} = rule;
        suffixes = Array.isArray(suffixes) ? suffixes : [];
        const hasSuffixes = suffixes.length > 0;
        const handlerIsFunction = typeof handler === 'function';

        if (hasSuffixes && handlerIsFunction) {
            this.rules.push({
                suffixes,
                handler,
            });
        }
    }

    /**
     * Pluralizar plavra com base nas configurações.
     */
    pluralizeWord(noun, count) {
        if (count < 2) return word;

        for (let rule of this.rules) {
            const match = rule.suffixes.some((suffix) => {
                return noun.endsWith(suffix);
            });

            if (match) {
                return rule.handler(noun);
            }
        }

        return word + 's';
    }
}

module.exports = Pluralizer;