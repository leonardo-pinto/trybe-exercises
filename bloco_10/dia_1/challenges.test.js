const { TestScheduler } = require('@jest/core');
const challenges = require('./challenges');

describe('Função encode', () => {
  it('Teste se encode é uma função', () => {
    expect(typeof challenges.encode).toBe('function')
  })
  it('Teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, e 5', () => {
    expect(challenges.encode('aeiou')).toBe('12345')
  })
  it('Teste se outras letras não são convertidas', () => {
    expect(challenges.encode('bcd')).toBe('bcd')
  })
})


describe('Função decode', () => {
  it('Teste se decode é uma função', () => {
    expect(typeof challenges.decode).toBe('function')
  })
  it('Teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u', () => {
    expect(challenges.decode('12345')).toBe('aeiou')
  })
})