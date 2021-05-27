import React, { Component } from 'react'




export default class App extends Component {
  constructor() {
    super()
    this.state = {
      numberOfClicksFirstButton: 0,
      numberOfClicksSecondButton: 0
    }
    this.firstButton = this.firstButton.bind(this)
    this.secondButton = this.secondButton.bind(this)
  }
  firstButton = () => {
    this.setState((lastState, _props) => ({
      numberOfClicksFirstButton: lastState.numberOfClicksFirstButton + 1
    }))
  }

  secondButton = () => {
    this.setState((lastState, _props) => ({
      numberOfClicksSecondButton: lastState.numberOfClicksSecondButton + 1
    }))
  }
  
  render() {
    return (
      <div>
        <button onClick={this.firstButton}>{this.state.numberOfClicksFirstButton}</button>
        <button onClick={this.secondButton}>{this.state.numberOfClicksSecondButton}</button>
      </div>
    )
  }
}