const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../../models/user');

describe('O model de User', () => {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();

  it('possui o nome "User"', () => {
    checkModelName(User)('User');
  });

  it('possui as propriedades "fullName" e "email"', () => {
    ['fullName', 'email'].forEach(checkPropertyExists(user));
  });
});