import { products } from '../products';

const INITIAL_STATE = {
  products: products,
  totalCart: 0,
  cartProducts: [],
}

const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const CLEAR_CART = 'CLEAR_CART';

const productReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_PRODUCT:
      return state;
    case REMOVE_PRODUCT:
      return state;
    case CLEAR_CART:
      return state;
    default: 
      return state
  }
}

export default productReducer