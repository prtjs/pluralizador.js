/*
 * Pluralizar substantivos terminados em -m.
 *
 * Regra básica:
 *
 * Trocar -m por -ns.
 */

export const suffixes = [
  'm'
];

export function handler(noun: string): string {
  const radical = noun.substr(0, noun.length - 1);
  return radical + 'ns';
}

export default {
  suffixes,
  handler
};
