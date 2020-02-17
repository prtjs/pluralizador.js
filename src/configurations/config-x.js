'use strict';

const suffixes = [
  'x',
];

/*
 * DESCRIÇÃO:
 *   Pluralizar palavras terminadas em /-x/.
 * REGRA:
 *   Nãa fazer alterações.
 */
const handler = function (word) {
    return word;
}

module.exports = {
  suffixes,
  handler,
};