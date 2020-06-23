/*
 * Pluralizar substantivos terminados em -ão.
 *
 * Regra básica:
 *
 * Trocar -ão por -ões.
 */

const {regexAccents, regexVowels} = require('../regexes')

// Irregularidades para alguns sufixos
const irregulars = {
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
  'ãos': [
    'cidadão',
    'cristão'
  ]
}

const suffixes = [
  'ão'
]

function handler(noun) {
  const radical = noun.replace(/ão$/, '')

  // Irregulares para -ães
  if (irregulars['ães'].includes(noun)) {
    return radical + 'ães'
  }

  // Irregulares para -ãos
  if (irregulars['ãos'].includes(noun)) {
    return noun + 's'
  }

  // Terminará em -ãos se não for oxítona ou se for monossílaba
  const isOxytonic = !regexAccents.test(radical)
  const isMonosyllable = !regexVowels.test(radical)

  if (!isOxytonic || isMonosyllable) {
    return noun + 's'
  }

  return radical + 'ões'
}

module.exports = {
  suffixes,
  handler
}
