const rules = require('./rules')
const Pluralizer = require('./Pluralizer')

module.exports = function Pluralizador(noun, count = 2) {
  if (!noun) return
  const pluralizer = new Pluralizer()
  for (let rule of Object.values(rules)) pluralizer.addRule(rule)

  pluralizer.setNoun(noun)
  pluralizer.setCount(count)

  return pluralizer.pluralize()
}
