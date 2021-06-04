import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    console.log('Constructor')
    super(props);
    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
    this.state =({
      counter: 0,
    })
  }

  componentDidMount() {
    console.log('ComponentDidMount');
    console.log('-----------------');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component Did Update');
    console.log('-----------------');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
    console.log('-----------------');
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
      console.log('Should Component Update - DO NOT RENDER');
      return false
    }
    console.log('Should Component Update - RENDER')
    return true;
  }

  increaseCounter() {
    this.setState((previousState, _props) => ({
       counter: previousState.counter + 1
    }))
  }

  decreaseCounter() {
    this.setState((previousState, _props) => ({
      counter: previousState.counter - 1
   }))
  }

  render() {
    console.log('Render')
    const { counter } = this.state;
    
    return (
      <div>
        Counter: { counter }
        <button onClick={this.increaseCounter}>Increase</button>
        <button onClick={this.decreaseCounter}>Decrease</button>
      </div>
    )
  }
}
