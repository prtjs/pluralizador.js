'use strict';
module.exports = (function () {

const RE_ACCENTS = /[áâéêôóí]/;
const RE_VOWELS = /[aeiou]/;

return function (word, count) {
    if (!word || typeof word !== 'string' || count === 1) {
        return word;
    }

    if (/[rsz]$/.test(word)) return suffixRSZ(word);
    if (/l$/.test(word)) return suffixL(word);
    if (/m$/.test(word)) return suffixM(word);
    if (/x$/.test(word)) return suffixX(word);
    if (/ão$/.test(word)) return suffixAo(word);

    return word + 's' ;
}

/*
 * DESCRIÇÃO:
 *     Pluralizar palavras terminada em /-r/, /-s/ ou /-z/
 * REGRA:
 *     Acrescentar /-es/ ao final
 */
function suffixRSZ(word) {
    /*
     * EXCEÇÃO:
     *     Se a palavra for uma oxítona terminada em /ês/, /és/ ou /is/
     *     ela automaticamente deixará de sê-la e se tornará um paroxítona
     */
    const RE_SPECIAL_OXYTONIC = /[êéí]s$/;
    if (RE_SPECIAL_OXYTONIC.test(word)) {
        return word.replace(RE_SPECIAL_OXYTONIC, function (suffix) {

            // Checar somente a vogal
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
     *     Se a palavra terminar em /-s/ e for NÃO oxítona então ela não muda
     */
    const wordEndWithS = /s$/.test(word)
    const wordIsOxytonic = /[áãâêéí]s$/.test(word)
    if (wordEndWithS && !wordIsOxytonic) {
        return word;
    }

    return word + 'es';
}

/*
 * DESCRIÇÃO:
 *     Pluralizar palavras terminadas em /-l/
 * REGRA:
 *     Trocar /-l/ por /-is/
 */
function suffixL(word) {
    /*
     * EXCEÇÃO:
     *     De acordo com a Wikipédia [1] há "sete exceções" que fazem o plural /-es/
     * FONTE:
     *     [1] https://pt.wikipedia.org/wiki/Plural#Regras_especiais
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
     *     Se a palavra terminar em /-il/ e for uma oxítona (ou monossílaba),
     *     então esse sufixo será trocado por /-is/, caso contrário ele será
     *     trocado por /-eis/
     * EXEMPLOS:
     *     1) fuzil -> fuzis     [ oxítona ]
     *     2) fóssil -> fósseis  [ paroxítona ]
     */
    if (/il$/.test(word)) {

        // Se houver acentuação, então a palavra será automaticamente entendida
        // como NÃO sendo uma oxítona (ou monossílaba)
        if (RE_ACCENTS.test(word)) {
            return word.replace(/il$/, 'eis');
        }

        return word.replaces(/l$/, 's');
    }

    /*
     * EXCEÇÃO:
     *     Se a palavra for oxítnona terminada em /-el/, /-ol/ ou /-ul/, então
     *     deve-se trocar o /-l/ por /-is/ e acentuar os casos que exigidos
     *     pela norma da lingua (/-éis/ e /-óis/)
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
}

/*
 * DESCRIÇÃO:
 *     Pluralizar palavras terminadas em /-m/
 * REGRA:
 *     Trocar /-m/ por /-ns/
 */
function suffixM(word) {
    return word.replace(/m$/, 'ns');
}

/*
 * DESCRIÇÃO:
 *     Pluralizar palavras terminadas em /-x/
 * REGRA:
 *     Nãa fazer alterações
 */
function suffixX(word) {
    return word;
}

/*
 * DESCRIÇÃO:
 *     Pluralizar palavras terminadas em /-ão/
 * REGRA:
 *     Trocar /-ão/ por /-ões/
 */
function suffixAo(word) {
    /*
     * EXCEÇÃO:
     *     Algumas palavras deverão terminar em /-ães/ sem explicações lógicas,
     *     devendo apenas à motivos etmológicos
     */
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
    if (IRREGULARS_AES.indexOf(word) !== -1) {
        return word.replace(/ão$/, 'ães');
    }

    /*
     * EXCEÇÃO:
     *     Terminará em /-ãos/ se não for oxítona ou se for monossílaba
     */
    const radical = word.replace(/ão$/, '');
    const wordIsOxytonic = !RE_ACCENTS.test(radical);
    const wordIsMonosyllable = !RE_VOWELS.test(radical);
    if (!wordIsOxytonic || wordIsMonosyllable) {
        return word + 's';
    }

    /*
     * EXCEÇÃO:
     *     Algumas palavras terminam em /-ãos/ sem explicações lógicas
     */
    const IRREGULARS_AOS = [
        'cidadão',
        'cristão',
    ];
    if (IRREGULARS_AOS.indexOf(word) !== -1) {
        return word + 's';
    }

    return word.replace(/ão$/, 'ões');
}

})();
