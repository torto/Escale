const { expect } = require('chai')

const ParseTextToArray = require('./ParseTextToArray')

describe('ParseTextToArray', () => {
  it('execute', () => {
    const textString = 'asd asd1 asd2 asd3'
    const arrayReturn = ParseTextToArray(textString)
    expect(arrayReturn.length).to.be.equal(4)
    expect(arrayReturn[0].word).to.be.equal('asd')
    expect(arrayReturn[1].word).to.be.equal('asd1')
  })
})
