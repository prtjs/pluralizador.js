/*
 * Acentos
 */
const regexAccents = /[áâéêôóí]/

/*
 * Vogais
 */
const regexVowels = /[aeiou]/


module.exports = [
  {
    suffixes: [
      'ão'
    ],
    handler: function (noun) {
      const radical = noun.replace(/ão$/, '')
      const isOxytonic = !regexAccents.test(radical)
      const isMonosyllable = !regexVowels.test(radical)

      // Exceção (-ães)
      if (/(alem|capel|capit|catal|charlat|cirurgi|c|escriv|guardi|mam|p|sacrist|tabeli)ão$/.test(noun)) {
        return radical + 'ães'
      }

      // Exceção (-ãos)
      if (/(cidad|crist)ão$/.test(noun)) {
        return noun + 's'
      }

      // Terminará em -ãos se não for oxítona ou se for monossílaba
      if (!isOxytonic || isMonosyllable) {
        return noun + 's'
      }

      return radical + 'ões'
    }
  },
  {
    suffixes: [
      'l'
    ],
    handler: function (noun) {
      const hasAccent = regexAccents.test(noun)
      const radical = noun.replace(/.l$/, '')
      const withoutL = noun.replace(/l$/, '')

      /*
       * Lista de 'sete exceções' para plural com -es
       *
       * (Source: https://w.wiki/Uo$)
       */
      if (/(ava|ca|cônsu|fe|ma|me|mo)l$/.test(noun)) {
        return noun + 'es'
      }

      /*
       * Se o substantivo terminar em -il e for uma oxítona (ou monossílaba),
       * então esse sufixo será trocado por -is, caso contrário ele será
       * trocado por -eis.
       *
       * Exemplos:
       *
       * - fuzil  -> fuzis [oxítona]
       * - fóssil -> fósseis [paroxítona]
       */
      if (noun.endsWith('il')) {

        // Se tiver acento não pode ser oxítona nem monossílaba
        return hasAccent
          ? radical + 'eis'
          : radical + 's'
      }

      /*
       * Se o substantivo for uma palavra oxítona terminada em -el, -ol, -ul,
       * então deve-se trocar o -l por -is e acentuar os casos que são exigidos
       * pelas normas da língua portuguesa (-éis e -óis).
       */
      if (!hasAccent) { // (Sem acento = oxítona)
        const suffix = noun.substr(-2)

        switch (suffix) {
          case 'el':
            return radical + 'éis'
          case 'ol':
            return radical + 'óis'
          case 'ul':
            return radical + 'uis'
        }
      }

      // Mantém a vogal antes do -l
      return withoutL + 'is'
    }
  },
  {
    suffixes: [
      'r',
      's',
      'z'
    ],
    handler: function (noun) {
      const isOxytonic = regexAccents.test(noun)

      /*
       * Se o substantivo for uma palavra oxítona terminada em
       * -ês, -és ou -ís ela deixará de sê-la e se tornará uma paroxítona.
       */
      const regexSpecialOxytonic = /[êéí]s$/

      if (regexSpecialOxytonic.test(noun)) {
        return noun.replace(regexSpecialOxytonic, (suffix) => {
          const suffixVowel = suffix[0]

          switch (suffixVowel) {
            case 'ê':
            case 'é':
              return 'eses'
            case 'í':
              return 'ises'
          }
        })
      }

      // Se terminar em -s e não for oxítona, nada muda
      if (isOxytonic && noun.endsWith('s')) {
        return noun
      }

      return noun + 'es'
    }
  },
  {
    suffixes: [
      'm'
    ],
    handler: function (noun) {
      return noun.replace(/m$/, 'ns')
    }
  },
  {
    suffixes: [
      'x'
    ],
    handler: function (word) {
      return word
    }
  }
]
