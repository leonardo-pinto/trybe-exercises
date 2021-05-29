import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo'
import ProfessionalInfo from './ProfessionalInfo'
import FormDataDisplay from './FormDataDisplay'
import './Form.css'

const defaultState = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  addressType: '',
  curriculum: '',
  job: '',
  jobDescription: '',
  submitted: false,
}

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.updateState = this.updateState.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.sendForm = this.sendForm.bind(this);
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

  resetForm() {
    this.setState(defaultState);
  }

  sendForm() {
    this.setState({ submitted: true })
  }

  render() {

    return (
      <form className="form">
        <PersonalInfo 
          currentState={ this.state } 
          handleChange={this.handleChange}
          handleOnBlur={this.handleOnBlur}
        />

        <ProfessionalInfo 
          currentState={ this.state }
          handleChange={this.handleChange}
          handleOnMouseEnter={this.handleOnMouseEnter}
        />

        <button
          type="button"
          onClick= {this.sendForm}
        >{'Submit'}
        </button>

        <input 
          type="reset"
          onClick={this.resetForm}
        >
        </input>
        { this.state.submitted && <FormDataDisplay currentState={ this.state } />}
        
      </form>
    )
  }
}
