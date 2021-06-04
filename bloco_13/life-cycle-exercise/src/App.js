import React, { Component } from 'react';
import Counter from './Counter';

export default class App extends Component {
  constructor(props) {
   super(props);
   this.mountCounter = this.mountCounter.bind(this);
   this.unmountCounter = this.unmountCounter.bind(this);
   this.ignoreProp = this.ignoreProp.bind(this);
   this.state = ({
     mount: true,
     ignoreProp: 0,
   })
  }

  mountCounter() {
    this.setState({ mount: true })
  }

  unmountCounter() {
    this.setState({ mount: false })
  }

  ignoreProp() {
    this.setState({ ignoreProp: 1 })
  }
  

  render() {
    const { mount, ignoreProp } = this.state
    return (
      <div>
        <button onClick={ this.mountCounter } disabled={ mount }>Mount counter</button>
        <button onClick={ this.unmountCounter } disabled={ !mount }>Unmount counter</button>
        <button onClick={ this.ignoreProp }>Ignore Prop</button>
        { mount ? <Counter ignoreProp={ ignoreProp }/> : null}
      </div>
    )
  }
}
