import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles/pokemonInfo.css'

const PokemonInfo = () => {

  const [pokeInfo, setPokeInfo] = useState()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
      .then(res => setPokeInfo(res.data))
      .catch(err => console.log(err))
  }, [])

  console.log(pokeInfo)


  const { name } = useParams()
  return (
    <article className={`pokemon-info bg-${pokeInfo?.types[0].type.name}`}>
      <div className='logo-container'>
        <img src="./pokemon-logo.png" alt="" />
      </div>
      <header className='pokemon-info__header'>

        <div className='pokemon-info__img-container'>
          <img src={pokeInfo?.sprites.other['official-artwork'].front_default} alt="" />
        </div>

        <section className='pokemon-info__measures'>
          <div>
            <h3 className='pokemon-info__height'>{pokeInfo?.height}</h3>
            <p>Height</p>
          </div>
          <div>
            <h3 className='pokemon-info__height'>{pokeInfo?.weight}</h3>
            <p>Weight</p>
          </div>
        </section>

        <h1 className='pokemon-info__name'>{name}</h1>
      </header>

      <section className='pokemon-info__stats-container'>
        <div className='pokemon-info__stats-type'>
          <h2 className='type-title'>Type</h2>
          <div className='type-container'>
            {
              pokeInfo?.types.map(type => (
                <div className={`pokemon-info__type bg-${type.type.name}`}>{type.type.name}</div>
              ))
            }
          </div>
        </div>
        <div className='pokemon-info__stats-abilities'>
          <h2 className='abilities-title'>Abilities</h2>
          {
            pokeInfo?.abilities.map(ability => (
              <div>{ability.ability.name}</div>
            ))
          }
        </div>
      </section>
    </article>
  )
}

export default PokemonInfo