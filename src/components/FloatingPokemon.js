import React from 'react';
import pokemonImage from '../assets/images/pokemon.gif'; // Import the image
import './FloatingPokemon.css';

const FloatingPokemon = () => {
  return (
    <div className="floating-pokemon" style={{ backgroundImage: `url(${pokemonImage})` }}></div>
  );
};

export default FloatingPokemon;