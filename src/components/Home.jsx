import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainer } from '../store/slices/trainer.slice'

const Home = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const submit = e => {
    e.preventDefault()
    const inputValue = e.target.name.value
    
    if (inputValue.length !== 0) {
      dispatch(setTrainer(inputValue))
      navigate('/pokedex')
    }
  }
    
  return (
    <div className='home'>
      <div className='img-container'>
        <img className='pokedex-logo' src="/pokedex.jpg" alt="" />
      </div>
      <h1 className='home-title'>!Hi trainer</h1>
      <p>to start, give me your name </p>

      <form onSubmit={submit}>
        <input className='home-input' type="text" id='name' placeholder='Your name' required/>
        <button className='home-btn'>Catch 'Em All! </button>
      </form>

      <div className='poke-container'>
        <div className='first-circle'>
          <div className='second-circle'></div>
        </div>
        <div className='black-poke'></div>
      </div>

    </div>
  )
}

export default Home