import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class PokemonList extends React.Component{
  render() {
    return pokemons.map((item, index) => <Pokemon pokemon={item} key={index}/>)
  }
}

export default PokemonList;