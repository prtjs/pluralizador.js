interface Rule {
  suffixes: string[];
  handler(word: string): string;
}

export default class Pluralizer {
  private rules: Rule[] = [];
  private noun: string;
  private count: number;

  addRule(rule: Rule): void {
    this.rules.push(rule);
  }

  setNoun(noun: string): void {
    this.noun = noun;
  }

  setCount(count: number): void {
    this.count = count;
  }

  pluralize(): string {
    const noun = this.noun;
    const count = this.count;

    if (count < 2) {
      return noun;
    }

    for (let rule of this.rules) {
      const match = rule.suffixes.some((suffix: string) => {
        return noun.endsWith(suffix);
      });

      if (match) {
        return rule.handler(noun);
      }
    }

    return noun + 's';
  }
}
