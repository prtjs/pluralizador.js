const assert = require('assert')
const pluralize = require('../src/index')

describe('pluralize', function () {
  it('deve pluralizar palavras simples', function () {
    assert.equal(pluralize('carro'), 'carros')
    assert.equal(pluralize('fogo'), 'fogos')
    assert.equal(pluralize('fogo', 1), 'fogo')
    assert.equal(pluralize('fogo', 2), 'fogos')
    assert.equal(pluralize('fogo', 3), 'fogos')
  })

  it('deve pluralizar palavras terminadas em -ão', function () {
    assert.equal(pluralize('coração'), 'corações')
    assert.equal(pluralize('cidadão'), 'cidadãos')
    assert.equal(pluralize('grão'), 'grãos')
    assert.equal(pluralize('mão'), 'mãos')
    assert.equal(pluralize('pão'), 'pães')
  })

  it('deve pluralizar palavras terminadas em -l', function () {
    assert.equal(pluralize('varal'), 'varais')
    assert.equal(pluralize('pastel'), 'pastéis')
    assert.equal(pluralize('impossível'), 'impossíveis')
    assert.equal(pluralize('anzol'), 'anzóis')
  })

  it('deve pluralizar palavras terminadas em -r, -s ou -z', function () {
    assert.equal(pluralize('amor'), 'amores')
    assert.equal(pluralize('avestruz'), 'avestruzes')
    assert.equal(pluralize('lápis'), 'lápis')
    assert.equal(pluralize('português'), 'portugueses')
  })

  it('deve pluralizar palavras terminadas em -m', function () {
    assert.equal(pluralize('coragem'), 'coragens')
    assert.equal(pluralize('bem'), 'bens')
  })

  it('deve manter normal palavras terminadas em -x', function () {
    assert.equal(pluralize('tórax'), 'tórax')
  })

})
