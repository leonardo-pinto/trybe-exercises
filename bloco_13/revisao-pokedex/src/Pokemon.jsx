import React from 'react';
import Data from './data';
import './index.css';

const Pokemon = () => {
  
  let [ position, setPosition ] = React.useState(0);

  function nextPokemon() {
    if ( position < Data.length - 1) {
      setPosition(position + 1)
    } else {
      setPosition(0)
    }
  }

  function previousPokemon() {
    if ( position === 0) {
      setPosition(position = Data.length - 1)
    } else {
      setPosition(position - 1)
    }
  }

  return (
    <>
      <section>
        <div>
          <p>{Data[position].name}</p>
          <p>{Data[position].type}</p>
          <p>{`Average Weight: ${Data[position].averageWeight.value} ${Data[position].averageWeight.measurementUnit}`}</p>
        </div>
        <img src={Data[position].image} alt={Data[position].name}/>
      </section>
      <section>
        <button onClick={previousPokemon}>Previous Pokemon</button>
        <button onClick={nextPokemon}>Next Pokemon</button>
      </section>
    </>
  )
}

export default Pokemon;