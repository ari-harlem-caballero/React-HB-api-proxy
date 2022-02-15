import React from 'react';

export default function PokemonList({ pokemonName }) {
  return (
    <div>
      {
        pokemonName.map((pokemon, i) => 
          <div className='pokemon-info' key={pokemon.pokemon + i}>
            <p>{pokemon.pokemon}</p>
            <img src={pokemon.url_image} />
          </div>)
      }
    </div>
  );
}
