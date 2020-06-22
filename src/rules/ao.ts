/*
 * Pluralizar substantivos terminados em -ão.
 *
 * Regra básica:
 *
 * Trocar -ão por -ões.
 */

import {regexAccents, regexVowels} from '../regexes';

// Irregularidades para alguns sufixos
const irregulars = {

  /*
   * -ães
   */
  'ães': [
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
    'tabelião'
  ],

  /*
   * -ãos
   */
   'ãos': [
     'cidadão',
     'cristão'
   ]
};

const suffixes = [
  'ão'
];

function handler(noun: string): string {
  const radical = noun.substr(0, noun.length - 2);

  // Alguns substantivos terminarão em -ães (sem explicações lógicas)
  if (irregulars['ães'].includes(noun)) {
    return radical + 'ães';
  }

  // Terminará em -ãos se não for oxítona ou se for monossílaba
  const isOxytonic = !regexAccents.test(radical);
  const isMonosyllable = !regexVowels.test(radical);

  if (!isOxytonic || isMonosyllable) {
    return noun + 's';
  }

  // Alguns substantivos terminarão em -ão
  if (irregulars['ãos'].includes(noun)) {
    return noun + 's';
  }

  return radical + 'ões';
}

export default {
  suffixes,
  handler
};
