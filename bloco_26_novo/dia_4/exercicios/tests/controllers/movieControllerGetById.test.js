const sinon = require('sinon');
const { expect } = require('chai');
const MovieController = require('../../controllers/movieController');
const MovieService = require('../../services/movieService');

const expectedMovie = {
  id: '604cb554311d68f491ba5781',
  title: 'Example Movie',
  directedBy: 'Jane Dow',
  releaseYear: 1999,
};

describe('Ao chamar o controller de getById', () => {
  describe('quando o filme não existe no banco de dados', async () => {
    const request = {};
    const response = {};

    before(() => {
      request.params = {
        id: '604cb554311d68f491ba5781',
      };

      response.status = sinon.stub().returns(response);

      response.json = sinon.stub().returns();

      sinon.stub(MovieService, 'getById').resolves(null);
    });

    after(() => {
      MovieService.getById.restore();
    });

    it('é chamado o método status passando o código 404', async () => {
      await MovieController.getById(request, response);

      expect(response.status.calledWith(404)).to.be.equal(true);
    });

    it('é chamado o método json com a string "Filme não encontrado"', async () => {
      await MovieController.getById(request, response);

      expect(response.json.calledWith({ message: 'Filme não encontrado' })).to.be.equal(true);
    });
  });

  describe('quando o filme existe', async () => {
    const request = {};
    const response = {};

    before(() => {
      request.params = {
        id: '604cb554311d68f491ba5781',
      };

      response.status = sinon.stub().returns(response);

      response.json = sinon.stub().returns();

      sinon.stub(MovieService, 'getById').resolves(expectedMovie);
    });

    after(() => {
      MovieService.getById.restore();
    });

    it('é chamado o método status passando o código 200', async () => {
      await MovieController.getById(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método json com o filme', async () => {
      await MovieController.getById(request, response);

      expect(response.json.calledWith(expectedMovie)).to.be.equal(true);
    });
  });
});
