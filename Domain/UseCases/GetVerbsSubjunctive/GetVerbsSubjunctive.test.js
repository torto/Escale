const { expect } = require('chai')
const GetVerbsSubjunctive = require('./GetVerbsSubjunctive')
const textA = require('textA.factory')

describe('GetVerbsSubjunctive', () => {
  it('execute', () => {
    expect(GetVerbsSubjunctive(textA)).to.be.equal(58)
  })
})
