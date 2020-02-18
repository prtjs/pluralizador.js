'use strict';

const { RE_ACCENTS, RE_VOWELS } = require('../constants');

/*
 * DESCRIÇÃO:
 *   Pluralizar palavras terminadas em /-ão/.
 * REGRA:
 *   Trocar /-ão/ por /-ões/.
 */

const suffixes = [
    'ão',
];

// Palavras termindas em /-ão/ que viram /-ães/.
const IRREGULARS_AES = [
    'alemão',
    'capelão',
    'capitão',
    'catalão',
    'charlatão',
    'cirurgião',
    'cão',
    'escrivão',
    'guardião',
    'mamão',
    'pão',
    'sacristão',
    'tabelião',
];

// Palavras termindas em /-ão/ que viram /-ãos/.
const IRREGULARS_AOS = [
    'cidadão',
    'cristão',
];

const handler = (word) => {

    /*
     * EXCEÇÃO:
     *   Algumas palavras deverão terminar em /-ães/ sem explicações lógicas,
     *   devendo apenas à motivos etmológicos.
     */
    if (IRREGULARS_AES.includes(word)) {
        return word.replace(/ão$/, 'ães');
    }

    /*
     * EXCEÇÃO:
     *   Terminará em /-ãos/ se não for oxítona ou se for monossílaba.
     */
    const radical = word.replace(/ão$/, '');
    const wordIsOxytonic = !RE_ACCENTS.test(radical);
    const wordIsMonosyllable = !RE_VOWELS.test(radical);

    if (!wordIsOxytonic || wordIsMonosyllable) {
        return word + 's';
    }

    /*
     * EXCEÇÃO:
     *   Algumas palavras terminam em /-ãos/ sem explicações lógicas.
     */
    if (IRREGULARS_AOS.includes(word)) {
        return word + 's';
    }

    return word.replace(/ão$/, 'ões');
};

module.exports = {
    suffixes,
    handler,
};