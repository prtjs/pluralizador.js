module.exports = class Pluralizer {
  rules = []

  addRule(rule) {
    this.rules.push(rule)
  }

  setNoun(noun) {
    this.noun = noun
  }

  setCount(count) {
    this.count = count
  }

  pluralize() {
    const noun = this.noun
    const count = this.count

    if (count < 2) {
      return noun
    }

    for (let rule of this.rules) {
      const match = rule.suffixes.some((suffix) => {
        return noun.endsWith(suffix)
      })

      if (match) {
        return rule.handler(noun)
      }
    }

    return noun + 's'
  }
}
