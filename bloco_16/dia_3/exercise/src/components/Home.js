import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        Welcome to our new registration system
        <Link to="/login">Login</Link>
      </div>
    )
  }
}
