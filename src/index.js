const Pluralizer = require('./Pluralizer')

const rules = [
  require('./rules/ao'),
  require('./rules/l'),
  require('./rules/m'),
  require('./rules/r-s-z'),
  require('./rules/x')
]

module.exports = function Pluralizador(noun, count = 2) {
  if (!noun) return
  const pluralizer = new Pluralizer()
  for (let rule of rules) pluralizer.addRule(rule)

  pluralizer.setNoun(noun)
  pluralizer.setCount(count)

  return pluralizer.pluralize()
}
