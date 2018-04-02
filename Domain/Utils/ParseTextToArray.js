const dependencies = {
  Word: require('Domain/Entities/Word')
}

module.exports = function ParseTextToArray (text, injection) {
  const { Word } = Object.assign({}, dependencies, injection)
  const words = text.split(' ')
  const arrayWords = words.map((item) => {
    return new Word(item)
  })

  return arrayWords
}
