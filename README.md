# Pluralizador.js

[![Status](https://travis-ci.org/theuves/pluralizador.js.svg?branch=master)](https://travis-ci.org/theuves/pluralizador.js)

> Pluralize Portuguese nouns.

## Instalação

Instale-o com *npm*:

```
npm install --save pluralizador
```

...ou com [Yarn](https://yarnpkg.com/):

```
yarn add pluralizador
```

## Uso

Veja alguns exemplos:

```js
const pluralize = require("pluralizador");

pluralize("coração");
//-> "corações"

pluralize("coração", 1);
//-> "coração"

pluralize("coração", 2);
//-> "corações"

pluralize("pastel", 743);
//-> "pastéis"

pluralize("português", 42);
//-> "portugueses"
```

### Exemplo de possível uso

```js
var fs = require("fs");
var pluralize = require("pluralizador");

fs.readdir("./", (err, files) => {
  console.log(`Há ${files.length} ${pluralize("arquivo", files.length)}.`);

  // retorna "Há 1 arquivo." se tiver 1 arquivo.
  // retorna "Há 2 arquivos." se tiver 2 arquivos.
});
```

## API

### `pluralize(word [, count])`

#### `word`

*string* (obrigatório)

Um substantivo português qualquer para ser pluralizado.

#### `count`

*number* (opcional)

Uma quantidade desse substantivo para verificar se deve pluralizar ou não.

## Observações

**Obs. I**:

A língua portuguesa é extremamente irregular e consequentemente há algumas
dificuldades para um algoritmo manipular palavras, sentenças, etc. No caso das
palavras terminadas em /-ão/, não há uma regra geral para a pluralização, pois
isso varia de acordo com a etimologia da palavra. Desse modo, essa ferramenta
se beneficia duma lista predefinida dos substantivos mais irregulares,
portanto, esteja ciente que nesses casos a pluralização está sujeita a falhas
(embora sua ocorrência seja pouco provável).

Sinta-se livre para aumentar a lista enviando um *Pull Request*.

**Obs. II**:

Essa ferramenta pluraliza apenas substantivos. Se você deseja pluralizar um verbo
(por exemplo: de *amei* para *amaram*, de *amarei* para *amarão*, ou qualquer
coisa do gênero), então você pode usar uma outra ferramenta, como o
[*Conjugador.js*](https://github.com/theuves/conjugador) que permite que
você conjugue verbos da língua portuguesa.

## TODO

- [ ] Opção para escolher plural de palavras terminadas em /-ão/.

## Licença

MIT &copy; Matheus Alves
