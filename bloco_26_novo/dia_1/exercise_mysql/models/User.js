const Joi = require('joi');
const connection = require('./connection');

const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({
  'string.min': `O campo deve ter, pelo menos, 6 caracteres`,
});

const isValid = (userData) => {
  return userSchema.validate(userData);
};

const formatUser = ({ id, first_name: firstName, last_name: lastName, email }) => {
  return {
    id,
    firstName,
    lastName,
    email,
  };
};

const createUser = async ({ firstName, lastName, email, password }) => {
  const query = 'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
  
  return connection.execute(query, [firstName, lastName, email, password ])
    .then(([result]) => ({ id: result.insertId, firstName, lastName, email  }));
};

const getAllUsers = async () => {
  const query = 'SELECT * FROM users_crud.users;'

  return await connection.execute(query).then(([results]) => results.map(formatUser));
};

const findUserById = async (id) => {
  const query = 'SELECT * FROM users_crud.users WHERE id = ?;';

  const user = await connection.execute(query, [id])
    .then(([results]) => (results.length ? results[0] : null));

  if (!user) return null;

  return formatUser(user);
}

const updateUser = async (id, { firstName, lastName, email, password }) => {
  const query = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?;';

  await connection.execute(query, [firstName, lastName, email, password, id]);

  return findUserById(id);

}

module.exports = {
  createUser,
  isValid,
  getAllUsers,
  findUserById,
  updateUser,
};


