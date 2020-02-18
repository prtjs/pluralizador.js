'use strict';

/*
 * DESCRIÇÃO:
 *   Pluralizar palavras terminada em /-r/, /-s/ ou /-z/.
 * REGRA:
 *   Acrescentar /-es/ ao final.
 */

const suffixes = [
    'r',
    's',
    'z',
];

const handler = (word) => {

    /*
     * EXCEÇÃO:
     *   Se a palavra for uma oxítona terminada em /ês/, /és/ ou /ís/
     *   ela automaticamente deixará de sê-la e se tornará um paroxítona.
     */
    const RE_SPECIAL_OXYTONIC = /[êéí]s$/;

    if (RE_SPECIAL_OXYTONIC.test(word)) {
        return word.replace(RE_SPECIAL_OXYTONIC, (suffix) => {

            // Checar somente a vogal.
            switch (suffix[0]) {
                case 'ê':
                case 'é':
                    return 'eses';
                case 'í':
                    return 'ises';
            }
        });
    }

    /*
     * EXCEÇÃO:
     *   Se a palavra terminar em /-s/ e NÃO for oxítona então ela não muda.
     */
    const wordEndsWithS = /s$/.test(word);
    const wordIsOxytonic = /[áãâêéí]s$/.test(word);

    if (wordEndsWithS && !wordIsOxytonic) {
        return word;
    }

    return word + 'es';
};

module.exports = {
    suffixes,
    handler,
};