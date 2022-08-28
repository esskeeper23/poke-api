import './App.css'
import Home from './components/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './components/Pokedex'
import {Route, Routes} from 'react-router-dom'
import PokemonInfo from './components/PokemonInfo'

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path='' element={<Home />} />

        <Route element={<ProtectedRoutes />} >
          <Route path='/pokedex' element={<Pokedex />}/>
          <Route path='/pokedex/:id' element={<PokemonInfo />}/>
        </Route>
      </Routes>

    </div>
  )
}

export default App
