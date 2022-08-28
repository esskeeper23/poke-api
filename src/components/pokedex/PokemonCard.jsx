import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PokemonCard = ({url}) => {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [])

  console.log(pokemon)
  
  return (
    <div>PokemonCard</div>
  )
}

export default PokemonCard