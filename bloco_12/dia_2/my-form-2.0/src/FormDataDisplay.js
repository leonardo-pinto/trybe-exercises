import React, { Component } from 'react'

export default class FormDataDisplay extends Component {
  
  render() {
    const { currentState: { 
      name,
      email,
      cpf,
      address,
      city,
      state,
      addressType,
      curriculum,
      job,
      jobDescription,
     }} = this.props
    
     return (
      <div>
        <h2>Information</h2>
        <h3>Personal</h3>
        <div> Name: { name }</div>
        <div> Email: { email }</div>
        <div> CPF: { cpf }</div>
        <div> Address: { address }</div>
        <div> City: { city }</div>
        <div> State: { state }</div>
        <div> Address type: { addressType }</div>
        <h3>Profissional</h3>
        <div> Curriculum: { curriculum }</div>
        <div> Job: { job }</div>
        <div> Job description: { jobDescription }</div>
      </div>
    )
  }
}
