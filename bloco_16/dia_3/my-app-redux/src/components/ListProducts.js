import React from 'react'
import { connect } from 'react-redux'
import './ListProducts.css';
import { addProduct } from '../actions';

class ListProducts extends React.Component {
  render() {
    const { listProducts, addProductToCart } = this.props;
    return (
      <div>
        { listProducts.map((product, index) => (
          <div className='products-list' key={ index }>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={() => addProductToCart(product)}>
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  listProducts: state.productReducer.products,
});

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (state) => dispatch(addProduct(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts)

// disparar um dispatch para adicionar produtos ao carrinho
