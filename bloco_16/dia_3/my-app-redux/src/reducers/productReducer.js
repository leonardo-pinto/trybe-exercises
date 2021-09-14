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
      return {...state, cartProducts: [...state.cartProducts, action.product]}
    case REMOVE_PRODUCT:
      return {...state,
        cartProducts: [...state.cartProducts.filter(cartProduct => cartProduct.name !== action.product.name)]}
    case CLEAR_CART:
      return {...state,
        cartProducts: []}
    default: 
      return state
  }
}

export default productReducer