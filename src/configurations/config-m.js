'use strict';

const suffixes = [
  'm',
];

/*
 * DESCRIÇÃO:
 *   Pluralizar palavras terminadas em /-m/.
 * REGRA:
 *   Trocar /-m/ por /-ns/.
 */
const handler = function (word) {
    return word.replace(/m$/, "ns");
};

module.exports = {
  suffixes,
  handler,
};