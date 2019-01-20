# Pluralizador

> Pluralizador de substantivos da língua portuguesa.

## Instalação

Instale-o com *npm*:

```
npm install --save pluralizador
```

...ou com [Yarn](https://yarnpkg.com/) se quiser.

...ou baixe-o [aqui](https://github.com/theuves/pluralizador.js/archive/master.zip)
para rodá-lo no navegador.


## Uso

```js
var pluralize = require('pluralizador');

pluralize('coração', 1);
//=> 'coração'

pluralize('coração', 2);
//=> 'corações'

pluralize('pastel', 743)
//=> 'pastéis'

pluralize('português', 42)
//=> 'potugueses'
```

## Observações

**Obs. I**:

A língua portuguesa é extremamente irregular e consequentemente há algumas
dificuldades para um algoritmo manipular palavras, sentenças, etc. No caso das
palavras terminadas em /-ão/, não há uma regra geral para a pluralização, pois
isso varia de acordo com a etmologia da palavra.

**Obs. II**:

Essa ferramenta só pluraliza substantivos. Se você deseja pluralizar um verbo
(por exemplo: de *amei* para *amaram*, de *amarei* para *amarão*, ou qualquer
coisa do gênero), então você pode usar uma outra ferramenta, como o
[*Conjugador.js*](https://github.com/theuves/conjugador.js) que permite que
você conjugue verbos da língua portuguesa.

## TODO

- [ ] Adicionar opção para escolher plural de palavras terminadas em /-ão/ e
que aceitam mais de uma forma de escrita.

## Licença

MIT &copy; Matheus Alves