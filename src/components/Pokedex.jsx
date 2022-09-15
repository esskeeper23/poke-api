import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import PokemonCard from './pokedex/PokemonCard'
import '../header.css'
import { useSelector } from 'react-redux'
import trainerSlice from '../store/slices/trainer.slice'
import './pokedex/pokemonCard.css'
import SearchPokemon from './pokedex/SearchPokemon'
import SelectType from './pokedex/SelectType'
import Pagination from './Pagination'

const Pokedex = () => {

  const [currentBlock, setCurrentBlock] = useState(1)
  const [page, setPage] = useState(0)

  const [pokemons, setPokemons] = useState()
  const [pokemonQuery, setPokemonQuery] = useState()
  const [typeSelected, setTypeSelected] = useState('All')

  useEffect(() => {
    let URL

    if (typeSelected !== 'All') {
      const URL = `https://pokeapi.co/api/v2/type/${typeSelected}`
      axios.get(URL)
        .then(res => {
          const arr = res.data.pokemon.map(e => e.pokemon)
          setPokemons({results: arr})
        })
    }else if (pokemonQuery) {

      const url = `http://pokeapi.co/api/v2/pokemon/${pokemonQuery}`

      const obj = {
        results: [{url}]
      }
      setPokemons(obj) 

  }
    else {
      URL = 'http://pokeapi.co/api/v2/pokemon'
    }

    axios.get(URL)
      .then(res => setPokemons(res.data))
      .catch(err => console.log(err))
  }, [pokemonQuery, typeSelected, page])

  
  const nameTrainer = useSelector(state => state.trainer)

  return (
    <div className='pokemon-contianer'>
      <Header />
      <div>
        <p> <span>Welcome, {nameTrainer}</span></p>
      </div>

      <SearchPokemon 
      setPokemonQuery={setPokemonQuery} 
      setTypeSelected={setTypeSelected} 
      />

      <SelectType 
      setTypeSelected={setTypeSelected} 
      typeSelected={typeSelected}
      setPokemonQuery={setPokemonQuery}
      setCurrentBlock={setCurrentBlock}
      setPage={setPage}
      />

      <Pagination 
        pokemons={pokemons}
        page={page}
        setPage={setPage}
        currentBlock={currentBlock}
        setCurrentBlock={setCurrentBlock}
      />

      <div className='cards-container'>
        {
          pokemons?.results.slice(page * 18, (page + 1) * 18).map(pokemon => (
            <PokemonCard 
              key={pokemon.url}
              url={pokemon.url}
            />
          ))
        }
      </div>

      <Pagination 
        pokemons={pokemons}
        page={page}
        setPage={setPage}
        currentBlock={currentBlock}
        setCurrentBlock={setCurrentBlock}
      />
    </div>
  )
}

export default Pokedex