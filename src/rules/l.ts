/*
 * Pluralizar substantivos terminados em -l.
 *
 * Regra básica:
 *
 * Trocar -l por -is.
 */

import {regexAccents} from '../regexes';

// Lista de sete exceções para plural -es
const listSevenExceptions = [
  'aval',
  'cal',
  'cônsul',
  'fel',
  'mal',
  'mel',
  'mol'
];

export const suffixes = [
  'l'
];

export function handler(noun: string): string {
  const hasAccent = regexAccents.test(noun);
  const radical = noun.substr(0, noun.length - 2);

  /*
   * Sete exceções para o plural -es.
   *
   * (Source: https://w.wiki/Uo$)
   */
   if (listSevenExceptions.includes(noun)) {
     return noun + 'es';
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
    if (hasAccent) {
      return radical + 'eis';
    }

    return radical + 's';
  }

  /*
   * Se o substantivo for uma palavra oxítona terminada em -el, -ol, -ul,
   * então deve-se trocar o -l por -is e acentuar os casos que são exigidos
   * pelas normas da língua portuguesa (-éis e -óis).
   */
   if (!hasAccent) { // (Sem acento = oxítona)
     const suffix = noun.substr(-2);

     switch (suffix) {
       case 'el':
         return radical + 'éis';
       case 'ol':
         return radical + 'óis';
       case 'ul':
         return radical + 'uis';
     }
   }

   // Mantém a vogal antes do -l
   return noun.replace(/l$/, 'is');
};

export default {
  suffixes,
  handler
};
