import React, { Component } from 'react';
import Cart from './components/Cart';
import ListProducts from './components/ListProducts';

export default class App extends Component {
  render() {
    return (
      <div>
        <ListProducts />
        <Cart />
      </div>
    )
  }
}
