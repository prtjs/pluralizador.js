/*
 * Pluralizar substantivos terminados em -x.
 *
 * Regras básicas:
 *
 * Não faz alterações.
 */

export const suffixes = [
  'x',
];

export function handler(word: string): string {
  return word;
}

export default {
  suffixes,
  handler
};
