import React from 'react'

const SearchPokemon = ({setPokemonQuery, setTypeSelected}) => {

    const handleSubmit = e => {
        e.preventDefault()
        const pokemon = e.target.pokemon.value.trim().toLowerCase()
        setPokemonQuery(pokemon)
        setTypeSelected('All')
    }

  return (
    <form onSubmit={handleSubmit}>
        <input id='pokemon' type="text" />
        <button>Search</button>
    </form>
  )
}

export default SearchPokemon