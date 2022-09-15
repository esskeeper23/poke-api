import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectType = ({setCurrentBlock, setPage, setTypeSelected, typeSelected, setPokemonQuery}) => {

    const [pokemonType, setPokemonType] = useState()

    useEffect(() => {
        const URL = 'https://pokeapi.co/api/v2/type/'

        axios.get(URL)
          .then(res => setPokemonType(res.data.results))
          .catch(err => console.log(err))

    }, [])

    const handleSubmit = e => {
        setTypeSelected(e.target.value)
        setPokemonQuery('')
        setPage(0)
        setCurrentBlock(1)
    }
    

  return (
    <select value={typeSelected} onChange={handleSubmit}>
        <option value="All">All pokemons</option>
    {
        pokemonType?.map(type =>(
            <option key={type.name} value={type.name}>{type.name}</option>
        ))
    }
    </select>
  )
}

export default SelectType