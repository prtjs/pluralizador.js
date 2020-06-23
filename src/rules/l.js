/*
 * Pluralizar substantivos terminados em -l.
 *
 * Regra básica:
 *
 * Trocar -l por -is.
 */

const {regexAccents} = require('../regexes')

/*
 * Lista de 'sete exceções' para plural com -es
 *
 * (Source: https://w.wiki/Uo$)
 */
const listSevenExceptions = [
  'aval',
  'cal',
  'cônsul',
  'fel',
  'mal',
  'mel',
  'mol'
]

const suffixes = [
  'l'
]

function handler(noun) {
  const hasAccent = regexAccents.test(noun)
  const radical = noun.replace(/.l$/, '')

  // Verifica as 'sete exceções'
  if (listSevenExceptions.includes(noun)) {
    return noun + 'es'
  }

  /*
   * Se o substantivo terminar em -il e for uma oxítona (ou monossílaba),
   * então esse sufixo será trocado por -is, caso contrário ele será
   * trocado por -eis.
   *
   * Exemplos:
   *
   * - fuzil  -> fuzis [oxítona]
   * - fóssil -> fósseis [paroxítona]
   */
  if (noun.endsWith('il')) {

    // Se tiver acento não pode ser oxítona nem monossílaba
    return hasAccent
      ? radical + 'eis'
      : radical + 's'
  }

  /*
   * Se o substantivo for uma palavra oxítona terminada em -el, -ol, -ul,
   * então deve-se trocar o -l por -is e acentuar os casos que são exigidos
   * pelas normas da língua portuguesa (-éis e -óis).
   */
   if (!hasAccent) { // (Sem acento = oxítona)
     const suffix = noun.substr(-2)

     switch (suffix) {
       case 'el':
         return radical + 'éis'
       case 'ol':
         return radical + 'óis'
       case 'ul':
         return radical + 'uis'
     }
   }

   // Mantém a vogal antes do -l
   return noun.replace(/l$/, 'is')
}

module.exports = {
  suffixes,
  handler
}
