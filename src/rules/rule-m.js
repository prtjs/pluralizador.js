'use strict';

/*
 * DESCRIÇÃO:
 *   Pluralizar palavras terminadas em /-m/.
 * REGRA:
 *   Trocar /-m/ por /-ns/.
 */

const suffixes = [
    'm',
];

const handler = (word) => {
    return word.replace(/m$/, 'ns');
};

module.exports = {
    suffixes,
    handler,
};