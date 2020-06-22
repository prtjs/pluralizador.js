/*
 * Pluralizar substantivos terminados em -r, -s ou -z.
 *
 * Regra básica:
 *
 * Acrescentar -es no final.
 */

import {regexAccents} from '../regexes'

export const suffixes = [
  'r',
  's',
  'z'
];

export function handler(noun: string): string {
  const isOxytonic = regexAccents.test(noun);

  /*
   * Se o substantivo for uma palavra oxítona terminada em
   * -ês, -és ou -ís ela deixará de sê-la e se tornará uma paroxítona.
   */
  const regexSpecialOxytonic = /[êéí]s$/;

  if (regexSpecialOxytonic.test(noun)) {
    return noun.replace(regexSpecialOxytonic, (suffix) => {
      const suffixVowel = suffix[0];

      switch (suffixVowel) {
        case 'ê':
        case 'é':
          return 'eses';
        case 'í':
          return 'ises';
      }
    });
  }

  // Se terminar em -s e não for oxítona, nada muda
  if (isOxytonic && noun.endsWith('s')) {
    return noun;
  }

  return noun + 'es';
}

export default {
  suffixes,
  handler
};
