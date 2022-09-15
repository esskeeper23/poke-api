import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokemonInfo = () => {

  const [pokeInfo, setPokeInfo] = useState()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
      .then(res => setPokeInfo(res.data))
      .catch(err => console.log(err))
  }, [])
  

  const {name} = useParams()
  return (
    <article>
      <h1>{name}</h1>
      <img src={pokeInfo?.sprites.other['official-artwork'].front_default} alt="" />
    </article>
  )
}

export default PokemonInfo