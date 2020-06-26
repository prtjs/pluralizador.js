const assert = require('assert')
const rules = require('../src/rules')

describe('rules', function () {
  it('deve estar uma array com rules', function () {
    assert.ok(Array.isArray(rules), true)

    for (let rule of rules) {
      assert.deepEqual(Object.keys(rule), [
        'suffixes',
        'handler'
      ])

      assert.ok(Array.isArray(rule.suffixes))
      assert.equal(typeof rule.handler, 'function')
    }
  })

  it('deve retonar uma string por todo handler', function () {
    for (let rule of rules) {
      assert.equal(typeof rule.handler('foo'), 'string')
    }
  })
})
