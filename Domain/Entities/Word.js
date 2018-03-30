const dependencies = {
  constants: require('Domain/constants')
}

const LENGTH_PREPOSITION = 5
const POSITION_LAST_PREPOSITIONS = 4
const LETTER_NOT_PREPOSITION = 'l'

const MIN_LENGTH_VERB = 7

class Word {
  constructor (word = '') {
    this.word = word
    this.length = word.length
  }

  isFooLetter (letter) {
    const fooLetters = {
      r: true,
      t: true,
      c: true,
      d: true,
      b: true
    }
    return !!fooLetters[letter]
  }

  isBarLetter (letter) {
    return !this.isFooLetter(letter)
  }

  hasLetter (letter) {
    return this.word.includes(letter)
  }

  isPreposition () {
    if (this.length === LENGTH_PREPOSITION) {
      return this.isBarLetter(this.word[POSITION_LAST_PREPOSITIONS]) &&
      !this.hasLetter(LETTER_NOT_PREPOSITION)
    }
    return false
  }

  isVerb () {
    if (this.length >= MIN_LENGTH_VERB) {
      return this.isBarLetter(this.word[this.length - 1])
    }
    return false
  }

  isVerbSubjunctive () {
    if (this.isVerb()) {
      return this.isBarLetter(this.word[0])
    }
    return false
  }

  getNumber (injection) {
    const { constants } = Object.assign({}, dependencies, injection)
    const valuesAlphabet = constants.orderAlphabet.split('')
    this.number = 0
    for (let i = 0; i < this.word.length; i++) {
      const base = Math.pow(20, i)
      this.number += valuesAlphabet.indexOf(this.word[i]) * base
    }
    return this.number
  }
}

module.exports = Word
