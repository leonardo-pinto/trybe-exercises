import React from 'react';
import { connect } from 'react-redux';
import { removeProduct, clearCart } from '../actions';

class Cart extends React.Component {
  render() {
    const { cartProducts, removeProduct, clearCart } = this.props;
    return (
      <div>
        Carrinho de compras
        <button onClick={() => clearCart()}>
          Esvaziar carrinho
        </button>
        { cartProducts.map((product, index) => (
          <div className='products-list' key={ index }>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={() => removeProduct(product)}>
              Remover produto
            </button>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cartProducts: state.productReducer.cartProducts,
});

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (state) => dispatch(removeProduct(state)),
  clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
