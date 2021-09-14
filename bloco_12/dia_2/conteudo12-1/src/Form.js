import React, { Component } from 'react'
import './Form.css'
import User from './User'
import Password from './Password'
import Description from './Description'


export default class Form extends Component {

  constructor() {
    super();
    this.state = {
      user: '',
      password: '',
      description: '',
      consent: false,
      file: '',
      degree: 'bsc'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form className="form">
        <User handleChange={this.handleChange } value={this.state.user}/>
        <Password handleChange={this.handleChange} value={this.state.password} />
        <Description handleChange={this.handleChange} value={this.state.description} />
        <fieldset>

          <select onChange={this.handleChange} className="input" name="degree" value={this.state.degree}>
            <option value="bsc">BSc</option>
            <option value="msc">MSc</option>
            <option value="phd">PhD</option>
          </select>
        

          Agree to make your informations public:
          <input onChange={this.handleChange} name="consent" type="checkbox" value={this.state.consent}/>
        
          <input onChange={this.handleChange} name="file" type="file" value={this.state.file}/>
        
        </fieldset>
      </form>
    )
  }
}
