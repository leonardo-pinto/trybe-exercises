const { expect } = require('chai');
const checkNumber = require('../checkNumber');

describe('checkNumber function', () => {
  describe('when the number is greater than 0', () => {
    describe('returns', () => {
      it('a string', () => {
        const result = checkNumber(10);
        expect(result).to.be.a('string');
      });

      it('the string "positivo"', () => {
        const result = checkNumber(10);
        expect(result).to.be.equals('positivo');
      });
    });
  });

  describe('when the number is lower than 0', () => {
    describe('returns', () => {
      it('a string ', () => {
        const result = checkNumber(-20);
        expect(result).to.be.a('string');
      });

      it('the string "negativo"', () => {
        const result = checkNumber(-20);
        expect(result).to.be.equals('negativo');
      });
    });
  });

  describe('when the number is 0', () => {
    describe('returns', () => {
      it('a string ', () => {
        const result = checkNumber(0);
        expect(result).to.be.a('string');
      });

      it('the string "neutro"', () => {
        const result = checkNumber(0);
        expect(result).to.be.equals('neutro');
      });
    });
  });

  describe('when the parameter is not a number', () => {
    describe('returns', () => {
      it('a string ', () => {
        const result = checkNumber('test');
        expect(result).to.be.a('string');
      });

      it('the string "o valor deve ser um número"', () => {
        const result = checkNumber('test');
        expect(result).to.be.equals('o valor deve ser um número');
      });
    });
  });
});