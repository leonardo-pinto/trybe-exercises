import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo'

const defaultState = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  addressType: '',
}

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
    }))
  }

  handleChange({ target }) {
    let { name, value } = target
    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);
    this.updateState(name, value)
  }

  handleOnBlur({ target }) {
    let { name, value } = target
    if (name === 'city') value = value.match(/\d+/) ? '' : value;
    this.updateState(name, value);
    
  }

  validateAddress(address) {
    return address.replace(/[^\w\s]/gi, '')
  }

  render() {

    return (
      <form>
          <PersonalInfo 
          value={this.state} 
          handleChange={this.handleChange}
          handleOnBlur={this.handleOnBlur}
          />
      </form>
    )
  }
}
