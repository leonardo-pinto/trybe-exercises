const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoConnection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Busca filme pelo id', () => {
  let connectionMock;
  const DBServer = new MongoMemoryServer();

  const ID_EXAMPLE = '604cb554311d68f491ba5781';

  const expectedMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const URLMock = await DBServer.getUri();
    connectionMock = await MongoClient.connect(URLMock, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('model_example'));

    sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });

  after(async () => {
    mongoConnection.getConnection.restore();
    await DBServer.stop();
  });

  describe('Quando não existe filme com o id buscado', () => {

    it('retorna null', async () => {
      const movies = await MoviesModel.getById(ID_EXAMPLE);

      expect(movies).to.be.equal(null);
    });
  });

  describe('Quando existe filme com o id buscado', () => {
    before(async () => {
      await connectionMock.collection('movies').insertOne({
        _id: ObjectId(ID_EXAMPLE),
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      });
    }); 

    it('retorna um objeto', async () => {
      const movies = await MoviesModel.getById(ID_EXAMPLE);
      expect(movies).to.be.an('object');
    });

    it('o objeto possui os atributos "id", "title", "directedBy", "releaseYear"', async () => {
      const movies = await MoviesModel.getById(ID_EXAMPLE);
      
      expect(movies).to.include.all.keys(['id', 'title', 'directedBy', 'releaseYear']);
    });
  });
});
