module.exports = class Pluralizer {
    constructor() {
        this.configurations = [];
    }

    /**
     * Adicionar configuração de pluralização.
     */
    add(configuration) {
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
    pluralize(noun) {
        for (configuration of this.configurations) {
            const match = configuration.suffixes.some((suffix) => {
                return noun.endsWith(suffix);
            });

            if (match) {
                return configuration.handler(noun);
            }
        }
    }
}