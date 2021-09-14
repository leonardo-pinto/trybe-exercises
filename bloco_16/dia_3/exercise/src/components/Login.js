import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login } from '../actions';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email:'',
      password:'',
    }
  }
  
  render() {
    const { email, password } = this.state;
    const { login } = this.props;
    return (
      <div>
        <label>
          Email
          <input
            type="text"
            onChange={e => this.setState({ email: e.target.value })}
          />
        </label>
        <label>
          Password
          <input 
            type="text"
            onChange={e => this.setState({ password: e.target.value })}
          />
        </label>
        <Link
          to="/clients"
          onClick={() => login({ email, password })}>
          Login
        </Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: e => dispatch(login(e)),
})

export default connect(null, mapDispatchToProps)(Login)