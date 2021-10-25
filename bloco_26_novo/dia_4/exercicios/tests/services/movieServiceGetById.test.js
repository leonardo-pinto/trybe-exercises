const sinon = require('sinon');
const { expect } = require('chai');
const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

const ID_EXAMPLE = '604cb554311d68f491ba5781';

const expectedMovie = {
  id: '604cb554311d68f491ba5781',
  title: 'Example Movie',
  directedBy: 'Jane Dow',
  releaseYear: 1999,
};


describe('Busca filme por id no BD', () => {
  describe('quando não existe o filme', () => {
    before(() => {
      sinon.stub(MoviesModel, 'getById').resolves(null);
    });

    after(() => {
      MoviesModel.getById.restore();
    });

    it('retorna nulo', async () => {
      const response = await MoviesModel.getById(ID_EXAMPLE);

      expect(response).to.be.null;
    });
  });

  describe('quando o filme existe', () => {
    before(() => {
      sinon.stub(MoviesModel, 'getById').resolves(expectedMovie);
    });

    after(() => {
      MoviesModel.getById.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesModel.getById(ID_EXAMPLE);
      
      expect(response).to.be.an('object');
    });

    it('tais itens possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const movie = await MoviesService.getById(ID_EXAMPLE);

      expect(movie).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
    });
  });
});
