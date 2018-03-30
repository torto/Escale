const dependencies = {
  Word: require('Domain/Entities/Word')
}

const IDEAL_NUMBER = 422224
const DECIMAL_DIVISION = 3

function GetPrettyNumbers (text, injection) {
  const { Word } = Object.assign({}, dependencies, injection)
  const words = text.split(' ')
  const arrayWords = words.map((item) => {
    return new Word(item)
  })
  const numberPretty = arrayWords.reduce((value, item) => {
    const number = item.getNumber()
    if (number >= IDEAL_NUMBER && number % DECIMAL_DIVISION === 0) return ++value
    return value
  }, 0)

  return numberPretty
}

module.exports = GetPrettyNumbers
