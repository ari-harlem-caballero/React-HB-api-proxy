import React from 'react';

export default function PokemonList({ pokemonName }) {
  return (
    <div className='pokemon'>
      {
        pokemonName.map((pokemon, i) => 
          <div className='pokemon-info' 
            key={pokemon.pokemon + i}>
            <h3>{pokemon.pokemon}</h3>
            <img src={pokemon.url_image} />
          </div>)
      }
    </div>
  );
}
