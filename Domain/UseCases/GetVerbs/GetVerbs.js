const dependencies = {
  Word: require('Domain/Entities/Word')
}

function GetVerbs (text, injection) {
  const { Word } = Object.assign({}, dependencies, injection)
  const words = text.split(' ')
  const arrayWords = words.map((item) => {
    return new Word(item)
  })

  const numerVerbs = arrayWords.reduce((value, item) => {
    if (item.isVerb()) return ++value
    return value
  }, 0)

  return numerVerbs
}

module.exports = GetVerbs
