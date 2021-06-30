import React from 'react'
import { connect } from 'react-redux'
import './ListProducts.css';

class ListProducts extends React.Component {
  render() {
    const { listProducts } = this.props;
    return (
      <div>
        { listProducts.map((product, index) => (
          <div className='products-list' key={ index }>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button>Adicionar ao carrinho</button>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  listProducts: state.productReducer.products,
});

export default connect(mapStateToProps, null)(ListProducts)