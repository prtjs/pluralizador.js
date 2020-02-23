'use strict';

const Pluralizer = require('./Pluralizer');
const Noun = require('./Noun');

/*
 * Definição dos plurais para cada sufixo
 */
const ruleAo  = require('./rules/rule-ao');
const ruleL   = require('./rules/rule-l');
const ruleM   = require('./rules/rule-m');
const ruleRSZ = require('./rules/rule-rsz');
const ruleX   = require('./rules/rule-x');

module.export = (word, count) => {
    const pluralizer = new Pluralizer();
    const noun = new Noun();

    // Adição das regras para cada sufixo no pluralizdor
    pluralizer.addRule(ruleAo);
    pluralizer.addRule(ruleL);
    pluralizer.addRule(ruleM);
    pluralizer.addRule(ruleRSZ);
    pluralizer.addRule(ruleX);

    // Configuração do substantivo
    noun.setWord(word);
    noun.setCount(count);
    noun.setPluralizer(pluralizer);

    return noun.pluralize()
};