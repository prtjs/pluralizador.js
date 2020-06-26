const assert = require('assert')
const Pluralizer = require('../src/Pluralizer')

const pluralizer = new Pluralizer()

describe('Pluralizer', function () {
  describe('#rules', function () {
    it('deve ser uma array', function () {
      assert.ok(Array.isArray(pluralizer.rules))
    })
  })

  describe('#addRule', function () {
    it('deve adicionar nova regra', function () {
      assert.equal(pluralizer.rules.length, 0)

      pluralizer.addRule({
        suffixes: ['ão'],
        handler: (noun) => noun + 's'
      })

      assert.equal(pluralizer.rules.length, 1)
    })
  })

  describe('#setNoun', function () {
    it('deve definir um novo substantivo', function () {
      pluralizer.setNoun('teste')
      assert.equal(pluralizer.noun, 'teste')
      pluralizer.setNoun('coração')
      assert.equal(pluralizer.noun, 'coração')
    })
  })

  describe('#setCount', function () {
    it('deve definir uma quantidade', function () {
      pluralizer.setCount(2)
      assert.equal(pluralizer.count, 2)
      pluralizer.setCount(3)
      assert.equal(pluralizer.count, 3)
    })
  })

  describe('#pluralize', function () {
    it('deve pluralizar o substantivo definido', function () {
      assert.equal(pluralizer.pluralize(), 'coraçãos')
    })

    it('deve ignorar se a quantidade for 1', function () {
      pluralizer.setCount(1)
      assert.equal(pluralizer.pluralize(), 'coração')
    })
  })
})
