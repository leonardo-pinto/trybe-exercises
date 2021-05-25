import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css'


class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image} = this.props.pokemon
    return (
      <section className='pokemon'>
        <p>{ name }</p>
        <p>{ type }</p>
        <p>Average weight: { averageWeight.value } { this.props.pokemon.averageWeight.measurementUnit }</p>
        <img src= {image} alt= {name} />
      </section>
    )
  }
}


Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string,
}

export default Pokemon;
