import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../pokedex/pokemonCard.css'
import { useNavigate } from 'react-router-dom'
import StatPokemon from './StatPokemon'

import './styles/pokemonCard.css'

const PokemonCard = ({ url }) => {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [])


  const navigate = useNavigate()

  const handleClick = () => navigate(`/pokedex/${pokemon.name}`)

  return (
    <article onClick={handleClick} className={`card color-${pokemon?.types[0].type.name}`}>
      <header className={`pokemon-card-header bg-${pokemon?.types[0].type.name}`}>
        <div>
          <img src={pokemon?.sprites.front_default} alt="" />
        </div>
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
      <footer className='card__footer'>
        <ul className='card__list-stats'>
          {
            pokemon?.stats.map(stat => (
              <StatPokemon
                key={stat.stat.url}
                infoStat={stat}
                color={pokemon?.types[0].type.name}
              />
            ))
          }
        </ul>
      </footer>
    </article>
  )
}

export default PokemonCard