import React from 'react';

//Criação de componente via função
/*function Greeting(props) {
  return (<h1>Hello, {props.name}</h1>);
}*/

//Criação de componente via classe
class Greeting extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name} {this.props.lastName} </h1>);
  }
}

export default Greeting