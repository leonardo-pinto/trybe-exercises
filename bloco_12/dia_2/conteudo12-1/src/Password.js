import React, { Component } from 'react'

export default class Password extends Component {
  render() {
    const { handleChange, value } = this.props
    return (
      <label>
        <input 
          onChange={handleChange} 
          className="input" 
          type="password" 
          name="password" 
          placeholder="Insert your password" 
          value={value}/>
    </label>
    )
  }
}
