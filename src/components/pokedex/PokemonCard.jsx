import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../pokedex/pokemonCard.css'
import { useNavigate } from 'react-router-dom'

const PokemonCard = ({url}) => {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [])

  console.log(pokemon)

  const navigate = useNavigate()

  const handleClick = () => navigate(`/pokedex/${pokemon.name}`)
  
  return (
    <article onClick={handleClick} className='card'>
      <header className='pokemon-card-header'>
        <img src={pokemon?.sprites.front_default} alt="" />
        <h3 className='pokemon-name'>{pokemon?.name}</h3>
        <ul>
          {
            pokemon?.types.map(slot => (
              <li key={slot.type.url}>{slot.type.name}</li>
            ))
          }
        </ul>
      </header>
      <hr />
    </article>
  )
}

export default PokemonCard