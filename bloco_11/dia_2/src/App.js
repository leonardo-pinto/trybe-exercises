import './App.css';
import React from 'react';
import Greeting from './Greeting';

class App extends React.Component {
  render() {
    return (
      <main>
        <Greeting name='Joselito' lastName='Sem noção'/>;
      </main>
    )  
  }
}
export default App;
