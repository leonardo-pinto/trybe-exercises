import React, { Component } from 'react'

export default class User extends Component {
  render() {
    const { handleChange, value } = this.props
    return (
        <label>
          <input 
            value={value} 
            onChange={handleChange} 
            className="input" 
            type="text" 
            name="user" 
            placeholder="Insert your username"/>
        </label>
    )
  }
}
