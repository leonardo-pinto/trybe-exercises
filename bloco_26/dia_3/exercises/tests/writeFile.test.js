const { expect } = require('chai');
const writeFile = require('../writeFile');
const sinon = require('sinon');
const fs = require('fs');


describe('writeFile function', () => {
  before(() => {
    sinon.stub(fs, 'writeFile');
  });

  after(() => {
    fs.writeFile.restore();
  });

  describe('returns', () => {
    it('a string', async () => {
      const result = await writeFile('createdFile.txt', 'Back-End');
      expect(result).to.be.a('string');
    });

    it('the string "ok"', async () => {
      const result = await writeFile('createdFile.txt', 'Back-End');
      expect(result).to.be.equals('ok');
    });
  });
});
