const { expect } = require('chai');

const { percentageGradesIntoLetters } = require('../../index');

const disciplinesDict = {
  mathematics: 'matemática',
};

describe('Testando a função "percentageGradesIntoLetters"', () => {
  describe('quando a nota é maior ou igual a 0.9', () => {
    it('retorna A', () => {
      const student = {
        name: 'Lee',
        disciplines: [
          { 
            name: disciplinesDict.mathematics,
            grade: 0.9 
          },
        ],
      };

      const { disciplines: [{ letterGrade }]} = percentageGradesIntoLetters(student);

      expect(letterGrade).to.be.equals('A');
    });
  });

  describe('quando a nota é maior ou igual a 0.8 e menor que 0.9', () => {
    it('retorna B', () => {
      const student = {
        name: 'Lee',
        disciplines: [
          { 
            name: disciplinesDict.mathematics,
            grade: 0.8 
          },
        ],
      };

      const { disciplines: [{ letterGrade }]} = percentageGradesIntoLetters(student);

      expect(letterGrade).to.be.equals('B');
    });
  });

  describe('quando a nota é maior ou igual a 0.7 e menor que 0.8', () => {
    it('retorna C', () => {
      const student = {
        name: 'Lee',
        disciplines: [
          { 
            name: disciplinesDict.mathematics,
            grade: 0.7 
          },
        ],
      };

      const { disciplines: [{ letterGrade }]} = percentageGradesIntoLetters(student);

      expect(letterGrade).to.be.equals('B');
    });
  });
});
