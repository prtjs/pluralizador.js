'use strict';

class Noun {
    constructor() {
        this.pluralizer = new Pluralizer();
        this.count = 1;
    }

    /**
     * Definir quantidade.
     */
    setCount(value) {
      this.count = value;
    }

    /**
     * Definir pluralizador com as respectivas regras.
     */
    setPluralizer(pluralizer) {
      this.pluralizer = pluralizer;
    }

    /**
     * Pluralizar palavra.
     */
    pluralize(word) {
      if (!word || typeof word !== 'string') return word;

      return this.pluralizer.pluralizeWord(word, this.count);
    }
}

module.exports = Noun;