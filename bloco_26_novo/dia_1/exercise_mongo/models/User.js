const Joi = require('joi');
const connection = require('./connection');
const { ObjectId } = require('mongodb');

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

const createUser = async ({ firstName, lastName, email, password }) => {
  return await connection()
    .then((db) => db.collection('users').insertOne({ firstName, lastName, email, password }))
    // após criar o usuário, obtemos o ID gerado pelo banco e o retornamos com o objeto SEM o password!
    .then((result) => ({ id: result.insertedId, firstName, lastName, email }))
};

const formatUser = (userData) => {
  const { _id, password, ...user } = userData;

  const formattedUser = {
    id: _id,
    ...user,
  };

  return formattedUser;
};

const getAllUsers = async () => {
  const allUsers = await connection()
    .then((db) => db.collection('users').find().toArray())
    .then((users) => users.map(formatUser));

  return allUsers;

};

const findById = async (id) => {
  const user =  await connection().then((db) => db.collection('users').findOne(new ObjectId(id)));
  
  if (!user) return null;

  return formatUser(user);
}

const updateUser = async (id, { firstName, lastName, email, password }) => {
  if (!ObjectId.isValid(id)) return 'id nulo' //verificar funcionamento

  const updatedUser = await connection()
    .then((db) => {
      const userId = new ObjectId(id);
      const updatedData = { firstName, lastName, email, password };
      return db.collection('users')
        .findOneAndUpdate({ _id: userId }, { $set: updatedData }, { returnOriginal: false })
        .then((result) => result.value);
    });
  
 

  if (!updatedUser) return null;
 
  return formatUser(updatedUser);
}

module.exports = {
  createUser,
  getAllUsers,
  isValid,
  findById,
  updateUser,
}
