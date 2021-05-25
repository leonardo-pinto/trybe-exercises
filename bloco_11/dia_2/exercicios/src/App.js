import React from 'react';
import PokemonList from './PokemonList';
import './App.css'

class App extends React.Component{
  render() {
    return(
     <div className='main-container'>
       <PokemonList />
     </div>
    );
  }
}

export default App;
