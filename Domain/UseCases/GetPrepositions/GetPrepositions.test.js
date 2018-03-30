const { expect } = require('chai')
const GetPrepositions = require('./GetPrepositions')
const textA = require('textA.factory')

describe('GetPrepositions', () => {
  it('execute', () => {
    expect(GetPrepositions(textA)).to.be.equal(49)
  })
})
