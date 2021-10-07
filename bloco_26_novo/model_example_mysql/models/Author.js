const connection = require('./connection');

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

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

const getAll = async () => {
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors;'

  const [authors] = await connection.execute(query);
  return authors.map(serialize).map(getNewAuthor);
};

const findById = async (id) => {
  const query =  'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id=?'

  const [authorById] = await connection.execute(query, [id]);

  if (authorById.length === 0) return null;

  // return authorById.map(serialize).map(getNewAuthor); 
  // since a single object must be return, we need access the index 0 of the returned array
  const { firstName, middleName, lastName } = serialize(authorById[0]);

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName
  });
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const create = async (firstName, middleName, lastName) => {
  const query =  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)';

  connection.execute(query, [firstName, middleName, lastName]);
}

module.exports = { 
  getAll, 
  findById, 
  isValid,
  create 
};
