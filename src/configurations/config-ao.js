'use strict';

const suffixes = [
    'ão',
];

/*
 * DESCRIÇÃO:
 *   Pluralizar palavras terminadas em /-ão/.
 * REGRA:
 *   Trocar /-ão/ por /-ões/.
 */
const handler = function (word) {
    /*
     * EXCEÇÃO:
     *   Algumas palavras deverão terminar em /-ães/ sem explicações lógicas,
     *   devendo apenas à motivos etmológicos.
     */
    const IRREGULARS_AES = [
        "alemão",
        "capelão",
        "capitão",
        "catalão",
        "charlatão",
        "cirurgião",
        "cão",
        "escrivão",
        "guardião",
        "mamão",
        "pão",
        "sacristão",
        "tabelião",
    ];

    if (IRREGULARS_AES.indexOf(word) !== -1) {
        return word.replace(/ão$/, "ães");
    }

    /*
     * EXCEÇÃO:
     *   Terminará em /-ãos/ se não for oxítona ou se for monossílaba.
     */
    const radical = word.replace(/ão$/, "");
    const wordIsOxytonic = !RE_ACCENTS.test(radical);
    const wordIsMonosyllable = !RE_VOWELS.test(radical);

    if (!wordIsOxytonic || wordIsMonosyllable) {
        return word + "s";
    }

    /*
     * EXCEÇÃO:
     *   Algumas palavras terminam em /-ãos/ sem explicações lógicas.
     */
    const IRREGULARS_AOS = [
        "cidadão",
        "cristão",
    ];
    if (IRREGULARS_AOS.indexOf(word) !== -1) {
        return word + "s";
    }

    return word.replace(/ão$/, "ões");
};

module.exports = {
    suffixes,
    handler,
};