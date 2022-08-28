import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonCard from './pokedex/PokemonCard'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()

  useEffect(() => {
    const URL = 'http://pokeapi.co/api/v2/pokemon'

    axios.get(URL)
      .then(res => setPokemons(res.data))
      .catch(err => console.log(err))
  }, [])
  
  console.log(pokemons)

  return (
    <div>
      <div className='card-container'>
        {
          pokemons?.results.map(pokemon => (
            <PokemonCard 
              key={pokemon.url}
              url={pokemon.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Pokedex