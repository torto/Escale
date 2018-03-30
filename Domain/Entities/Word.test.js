const { expect } = require('chai')

const Word = require('./Word')

describe('Word Entitie', () => {
  it('Mount enties whiout values', () => {
    const word = new Word()
    expect(word.length).to.be.equal(0)
    expect(word.word).to.be.equal('')
  })
  it('Mount and check length', () => {
    const wordExample = 'asdfe'
    const word = new Word(wordExample)
    expect(word.length).to.be.equal(5)
    expect(word.word).to.be.equal(wordExample)
  })
  it('isFooLetter function', () => {
    const fooLetter = 'r'
    const barLetter = 'j'
    const word = new Word()
    expect(word.isFooLetter(fooLetter)).to.be.equal(true)
    expect(word.isFooLetter(barLetter)).to.be.equal(false)
  })
  it('hasLetter function', () => {
    const letter = 'j'
    const letterNotExist = 'a'
    const fullWord = 'jssd'
    const word = new Word(fullWord)
    expect(word.hasLetter(letter)).to.be.equal(true)
    expect(word.hasLetter(letterNotExist)).to.be.equal(false)
  })

  describe('isPreposition function', () => {
    it('is preposition', () => {
      const prepositionWord = 'asdsw'
      const word = new Word(prepositionWord)
      expect(word.isPreposition()).to.be.equal(true)
    })
    it('is not preposition because have letter l', () => {
      const prepositionWithLLetter = 'asdel'
      const word = new Word(prepositionWithLLetter)
      expect(word.isPreposition()).to.be.equal(false)
    })
    it('is not preposition', () => {
      const anotherWord = 'jasdr'
      const word = new Word(anotherWord)
      expect(word.isPreposition()).to.be.equal(false)
    })
    it('is not preposition with less length', () => {
      const anotherWord = 'jr'
      const word = new Word(anotherWord)
      expect(word.isPreposition()).to.be.equal(false)
    })
  })

  describe('isVerb function', () => {
    it('is verb (7 letters)', () => {
      const verbWord = 'asdswasw'
      const word = new Word(verbWord)
      expect(word.isVerb()).to.be.equal(true)
    })
    it('is verb (more 7 letters)', () => {
      const verbWord = 'asdswaswpolk'
      const word = new Word(verbWord)
      expect(word.isVerb()).to.be.equal(true)
    })
    it('is not verb', () => {
      const verbWord = 'asderwc'
      const word = new Word(verbWord)
      expect(word.isVerb()).to.be.equal(false)
    })
    it('is not verb with less length', () => {
      const anotherWord = 'jr'
      const word = new Word(anotherWord)
      expect(word.isVerb()).to.be.equal(false)
    })
  })

  describe('getNumber function', () => {
    it('default test', () => {
      const wordText = 'hnh'
      const word = new Word(wordText)
      expect(word.getNumber()).to.be.equal(1062)
    })
  })
})
