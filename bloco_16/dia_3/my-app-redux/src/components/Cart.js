import React from 'react'
import { connect } from 'react-redux'

class Cart extends React.Component {
  render() {
    const { cartProducts } = this.props;
    return (
      <div>
        Carrinho de compras
        { cartProducts.map((product, index) => (
          <div className='products-list' key={ index }>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cartProducts: state.productReducer.cartProducts,
});

export default connect(mapStateToProps)(Cart)