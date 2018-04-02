const dependencies = {
  ParseTextToArray: require('Domain/Utils/ParseTextToArray'),
  constants: require('Domain/constants')
}

function SortText (text, injection) {
  const { ParseTextToArray, constants } = Object.assign({}, dependencies, injection)
  const arrayWords = ParseTextToArray(text)

  const order = constants.orderAlphabet

  const alphabetText = arrayWords.sort((a, b) => {
    let pos1 = 0
    let pos2 = 0
    for (let i = 0; i < Math.min(a.word.length, b.word.length) && pos1 === pos2; i++) {
      //set position regarding custom alphabet
      pos1 = order.indexOf(a.word[i])
      pos2 = order.indexOf(b.word[i])
    }

    if (pos1 === pos2 && a.word.length !== b.word.length) {
      //neutral: check if word is big than other
      return a.word.length - b.word.length
    }

    //negative: a is first, positive: b is first
    return pos1 - pos2
  })

  return alphabetText.map(e => e.word).join(' ')
}

module.exports = SortText
