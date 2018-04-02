const dependencies = {
  ParseTextToArray: require('Domain/Utils/ParseTextToArray')
}

const IDEAL_NUMBER = 422224
const DECIMAL_DIVISION = 3

function GetPrettyNumbers (text, injection) {
  const { ParseTextToArray } = Object.assign({}, dependencies, injection)
  const arrayWords = ParseTextToArray(text)

  const numberPretty = arrayWords.reduce((value, item) => {
    const number = item.getNumber()
    if (number >= IDEAL_NUMBER && number % DECIMAL_DIVISION === 0) return ++value
    return value
  }, 0)

  return numberPretty
}

module.exports = GetPrettyNumbers
