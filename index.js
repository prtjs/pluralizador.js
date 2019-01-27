'use strict';

// Lista de palavras terminadas
// em -ão que têm regras diferentes.
var irregulars = {

  // Quando deve assumir -ães.
  aes: [
    'alemão',
    'capelão',
    'capitão',
    'catalão',
    'charlatão',
    'cirurgião',
    'cão',
    'escrivão',
    'guardião',
    'mamão',
    'pão',
    'sacristão',
    'tabelião'
  ],

  // Quando deve assumir -ãos.
  aos: [
    'cristão',
    'cidadão'
  ]
};

/**
 * Pluralizar substantivos da língua portuguesa.
 *
 * @param {string} word Uma substantivo qualquer em português.
 * @param {number} count Uma quantidade desse substantivo.
 * @returns {string} A mesma palavra no plural.
 */
module.exports = function (word, count) {
  if (!word || typeof word !== 'string' || count === 1) {
    return word
  }

  // Se a palavra terminar em -r, -s ou -z, será adicionado -es.
  if (/(r|s|z)$/.test(word)) {

    // EXCEÇÃO: Se a palavra terminar com -r e for
    // oxítona (com /ê/, /é/ ou /i/) ela automaticamente
    // deixará de sê-la e virará uma paroxítona.
    if (/(ê|é|í)s$/.test(word)) {
      return word.replace(/(ê|é|í)s$/, function (_, letter) {
        switch (letter) {
          case 'ê':
          case 'é':
            return 'eses';
          case 'í':
            return 'ises';
        }
      });
    }

    // EXCEÇÃO: Se a palavra termina em -s e não
    // for oxítona, então ela não mudará.
    if (/s$/.test(word) && !/(á|ã|â|ê|é|í)s$/.test(word)) {
      return word;
    }

    return word + 'es';
  }

  // Para as palavras terminadas em -l, troca-se-a por -is.
  if (/l$/.test(word)) {
    var radical = word.substr(0, word.length - 1);

    // Para checar se a palavra é oxítona será verificado
    // apenas se o radical da palavra possui alguma acentuação.
    var isOxita = /(á|â|é|ê|ô|ó|í)/.test(radical)

    // EXCEÇÃO: Se a palavra terminar em -il
    // e for oxitona ele será trocado por -is,
    // caso contrário será por -eis.
    if (/il$/.test(word)) {
      if (!isOxita) {
        return word.replace(/il$/, 'is');
      }

      return word.replace(/il$/, 'eis');
    }

    // EXCEÇÃO: Se a palavra for oxítona então ela terá algumas exceções:
    // - Recebe acento se for terminada -el ou -ol.
    // - Termina em -uis se tinha o sufixo -ul.
    if (!isOxita) {
      var suffix = word.substr(-2);

      switch (suffix) {
        case 'el':
          return word.replace(/el$/, 'éis');
        case 'ol':
          return word.replace(/ol$/, 'óis');
        case 'ul':
          return word.replace(/ul$/, 'uis');
      }
    }

    return word.replace(/l$/, 'is');
  }

  // Palavras terminadas em -m mudarão para -ns.
  if (/m$/.test(word)) {
    return word.replace(/m$/, 'ns');
  }

  // Palavras terminadas em -x não mudam.
  if (/x$/.test(word)) {
    return word;
  }

  // Para as palavras terminadas em -ão.
  if (/ão$/.test(word)) {

    // Verificar se a palavra deve terminar em -ães.
    for (var i = 0; i < irregulars.aes.length; i++) {
      var irregularWord = irregulars.aes[i];

      if (word === irregularWord) {
        return word.replace(/ão$/, 'ães');
      }
    }

    var radical = word.substr(0, word.length - 3);

    // Casos em que obrigatoriamente deve terminar em -ãos:
    // - CASO I: Quando não for oxítona (terá acento obrigatoriamente).
    // - CASO II: Quando for monossílaba.
    if (
      /((á|â|é|ê|ô|ó|í))/.test(radical) ||
      !/[aeiou]/.test(radical)
    ) {
      return word + 's';
    }

    // Verificar se a palavra é uma exceção que deve terminar com -ãos.
    for (var i = 0; i < irregulars.aos.length; i++) {
      var irregularWord = irregulars.aos[i];

      if (word === irregularWord) {
        return word + 's';
      }
    }

    return word.replace(/ão$/, 'ões');
  }

  return word + 's';
};
