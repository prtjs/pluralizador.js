/*
 * Pluralizar substantivos terminados em -m.
 *
 * Regra básica:
 *
 * Trocar -m por -ns.
 */

const suffixes = [
  'm'
]

function handler(noun) {
  return noun.replace(/m$/, 'ns')
}

module.exports = {
  suffixes,
  handler
}
