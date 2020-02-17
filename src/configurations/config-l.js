'use strict';

const suffixes = [
    'l',
];

/*
 * DESCRIÇÃO:
 *   Pluralizar palavras terminadas em /-l/.
 * REGRA:
 *   Trocar /-l/ por /-is/.
 */
const handler = function (word) {
    /*
     * EXCEÇÃO:
     *   De acordo com a Wikipédia [1] há 'sete exceções' que fazem o plural /-es/.
     * FONTE:
     *   [1] https://pt.wikipedia.org/wiki/Plural#Regras_especiais
     */
    const LIST_SETE_EXCECOES = [
        'aval',
        'cal',
        'cônsul',
        'fel',
        'mal',
        'mel',
        'mol',
    ];
    if (LIST_SETE_EXCECOES.indexOf(word) !== -1) {
        return word + 'es';
    }

    /*
     * EXCEÇÃO:
     *   Se a palavra terminar em /-il/ e for uma oxítona (ou monossílaba),
     *   então esse sufixo será trocado por /-is/, caso contrário ele será
     *   trocado por /-eis/.
     * EXEMPLOS:
     *   - fuzil  -> fuzis    [ oxítona ]
     *   - fóssil -> fósseis  [ paroxítona ]
     */
    if (/il$/.test(word)) {

        // Se houver acentuação, então a palavra será automaticamente entendida
        // como NÃO sendo uma oxítona (ou monossílaba).
        if (RE_ACCENTS.test(word)) {
            return word.replace(/il$/, 'eis');
        }

        return word.replaces(/l$/, 's');
    }

    /*
     * EXCEÇÃO:
     *   Se a palavra for oxítnona terminada em /-el/, /-ol/ ou /-ul/, então
     *   deve-se trocar o /-l/ por /-is/ e acentuar os casos que exigidos
     *   pela norma da lingua (/-éis/ e /-óis/).
     */
    if (!RE_ACCENTS.test(word)) { // Sem acento -> oxítona
        const suffix = word.substr(-2);

        switch (suffix) {
            case 'el':
              return word.replace(/el$/, 'éis');
            case 'ol':
              return word.replace(/ol$/, 'óis');
            case 'ul':
              return word.replace(/ul$/, 'uis');
        }
    }

    return word.replace(/l$/, 'is');
};

module.exports = {
    suffixes,
    handler,
};