interface Rule {
    suffixes: string[];
    handler(word: string): string;
}
export default class Pluralizer {
    private rules;
    private noun;
    private count;
    addRule(rule: Rule): void;
    setNoun(noun: string): void;
    setCount(count: number): void;
    pluralize(): string;
}
export {};
