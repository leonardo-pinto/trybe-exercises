const LOGIN = 'LOGIN';
const ADD_REGISTER = 'ADD_REGISTER';

export const login = value => ({
  type: LOGIN,
  value,
})

export const addRegister = value => ({
  type: ADD_REGISTER,
  value,
})