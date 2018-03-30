const dependencies = {
  Word: require('Domain/Entities/Word')
}

function GetPrepositions (text, injection) {
  const { Word } = Object.assign({}, dependencies, injection)
  const words = text.split(' ')
  const arrayWords = words.map((item) => {
    return new Word(item)
  })

  const numerPreposition = arrayWords.reduce((value, item) => {
    if (item.isPreposition()) return ++value
    return value
  }, 0)

  return numerPreposition
}

module.exports = GetPrepositions
