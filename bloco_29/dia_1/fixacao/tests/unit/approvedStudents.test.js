const { expect } = require('chai');

const { approvedStudents } = require('../../index');

const disciplinesDict = {
  mathematics: 'matemática',
  history: 'história',
};

describe('Testando a função "approvedStudents"', () => {
  describe('quando todas as notas são maior que 0.7', () => {
    it('retorna "true"', () => {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.8 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];

      const result = approvedStudents({ disciplines });

      expect(result).to.be.equal(true);
    });
  });

  describe('quando todas as notas são menor que 0.7', () => {
    it('retorna "false"', () => {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.5 },
        { name: disciplinesDict.history, grade: 0.4 },
      ];

      const result = approvedStudents({ disciplines });

      expect(result).to.be.equal(false);
    });
  });

  describe('quando parte das notas são menor que 0.7', () => {
    it('retorna "false"', () => {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.9 },
        { name: disciplinesDict.history, grade: 0.4 },
      ];

      const result = approvedStudents({ disciplines });

      expect(result).to.be.equal(false);
    });
  });

});