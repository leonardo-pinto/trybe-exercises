import React, { Component } from 'react'

export default class Description extends Component {
  render() {
    const { value, handleChange } = this.props

    let error = undefined
    if (value.lenght > 60) error="Exceeded limit of characters"

    return (
      <label>
          <textarea 
            onChange={handleChange} 
            className="input" name="description" 
            placeholder="Insert a description of your research" 
            value={value}/>
          <span>{error ? error : ''}</span>
      </label>
    )
  }
}
