import React from 'react'
import '../header.css'

const Header = () => {
  return (
    <header>
        <div className='header-img-container'>
            <img src="/pokedex.jpg" alt="" />
        </div>
        
        <div className='black-header'>
            <div className='circle'>
                <div>

                </div>
            </div>
        </div>
    </header>
  )
}

export default Header