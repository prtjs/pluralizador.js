'use strict';

/*
 * DESCRIÇÃO:
 *   Pluralizar palavras terminadas em /-x/.
 * REGRA:
 *   Não fazer alterações.
 */

const suffixes = [
    'x',
];

const handler = (word) => {
    return word;
}

module.exports = {
    suffixes,
    handler,
};