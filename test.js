const test = require('theuves-test');
const pluralize = require('./src');

test('Deve pluralizar palavras simples', (is) => {
  is(pluralize('carro'), 'carros');
  is(pluralize('fogo'), 'fogos');
  is(pluralize('fogo', 2), 'fogos');
  is(pluralize('fogo', 42), 'fogos');
  is(pluralize('fogo', 1), 'fogo');
});

test('Deve pluralizar palavras terminadas em -r, -s ou -z', (is) => {
  is(pluralize('amor'), 'amores');
  is(pluralize('avestruz'), 'avestruzes');
  is(pluralize('lápis'), 'lápis');
  is(pluralize('português'), 'portugueses');
});

test('Deve pluralizar palavras terminadas em -l', (is) => {
  is(pluralize('varal'), 'varais');
  is(pluralize('pastel'), 'pastéis');
  is(pluralize('impossível'), 'impossíveis');
  is(pluralize('anzol'), 'anzóis');
});

test('Deve pluralizar palavras terminadas em -m', (is) => {
  is(pluralize('coragem'), 'coragens');
  is(pluralize('bem'), 'bens');
});

test('Deve manter normal palavras terminadas em -x', (is) => {
  is(pluralize('tórax'), 'tórax');
});

test('Deve pluralizar palavras terminadas em -ão', (is) => {
  is(pluralize('coração'), 'corações');
  is(pluralize('cidadão'), 'cidadãos');
  is(pluralize('grão'), 'grãos');
  is(pluralize('mão'), 'mãos');
  is(pluralize('pão'), 'pães');
});
