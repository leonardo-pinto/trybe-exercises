const fs = require('fs');
const sinon = require ('sinon');
const { expect } = require('chai');

const readFile = require('../readfile/readFile');

const fileContent = 'Foguete não tem ré';


describe('readFile', () => {
  describe('when the mean is lower than 7', () => {
    before(() => {
      sinon.stub(fs, 'readFileSync').returns(fileContent);
    });
  
    after(() => {
      fs.readFileSync.restore();
    });

    describe('returns a ', () => {
      it('string', () => {
        const result = readFile('file.txt');
        expect(result).to.be.a('string');
      });
  
      it('file content', () => {
        const result = readFile('file.txt');
        expect(result).to.be.equal(fileContent);
      });
    });
  });

  describe('when the file dont exist', () => {
    before(() => {
      sinon
        .stub(fs, 'readFileSync')
        .throws(new Error('File not found'));
    });
  
    after(() => {
      fs.readFileSync.restore();
    });

    describe('returns', () => {
      it('null', () => {
        const result = readFile('file dont exist.txt');
        expect(result).to.be.equal(null);
      });
    });
  });
});