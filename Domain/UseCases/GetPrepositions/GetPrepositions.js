const dependencies = {
  ParseTextToArray: require('Domain/Utils/ParseTextToArray')
}

function GetPrepositions (text, injection) {
  const { ParseTextToArray } = Object.assign({}, dependencies, injection)
  const arrayWords = ParseTextToArray(text)

  const numerPreposition = arrayWords.reduce((value, item) => {
    if (item.isPreposition()) return ++value
    return value
  }, 0)

  return numerPreposition
}

module.exports = GetPrepositions
