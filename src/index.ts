import Pluralizer from './Pluralizer';
import rules from './rules'

export default function Pluralizador(noun: string = '', count: number = 2): string {
  const pluralizer = new Pluralizer();

  for (let rule of rules) pluralizer.addRule(rule);

  pluralizer.setNoun(noun);
  pluralizer.setCount(count);

  return pluralizer.pluralize();
}
