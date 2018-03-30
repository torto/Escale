const { expect } = require('chai')
const GetPrettyNumbers = require('./GetPrettyNumbers')
const textA = require('textA.factory')

describe('GetPrettyNumbers', () => {
  it('execute', () => {
    expect(GetPrettyNumbers(textA)).to.be.equal(140)
  })
})
