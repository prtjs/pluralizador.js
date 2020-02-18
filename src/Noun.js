'use strict';

const Pluralizer = require('./Pluralizador');

class Noun {
    constructor() {
        this.word = ''
        this.count = 1;
        this.pluralizer = new Pluralizer();
    }

    /**
     * Definir palavra.
     */
    setWord(value) {
        this.word = value;
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

        return this.pluralizer.pluralizeWord(this.word, this.count);
    }
}

module.exports = Noun;