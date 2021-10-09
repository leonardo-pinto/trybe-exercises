const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName }= authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName: fullName,
  };
};

const create = async (firstName, middleName, lastName) => {
  await connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
}

const findById = async (id) => {
  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(ObjectId(id)));

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName
  });
}

const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
      .then((authors) => 
        authors.map(({ _id, firstName, middleName, lastName }) => 
          getNewAuthor({
            id: _id,
            firstName,
            middleName,
            lastName
          })
        )
      );
};

module.exports = { getAll, create, findById };
