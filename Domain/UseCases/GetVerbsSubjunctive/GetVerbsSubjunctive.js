const dependencies = {
  ParseTextToArray: require('Domain/Utils/ParseTextToArray')
}

function GetVerbsSubjunctive (text, injection) {
  const { ParseTextToArray } = Object.assign({}, dependencies, injection)
  const arrayWords = ParseTextToArray(text)

  const numerVerbs = arrayWords.reduce((value, item) => { 
    if (item.isVerbSubjunctive()) return ++value
    return value
  }, 0)

  return numerVerbs
}

module.exports = GetVerbsSubjunctive
