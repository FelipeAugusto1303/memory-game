import React from 'react'
import Game from './components/Game'
import './App.css';

const App = () => {
  return(
    <div className="container">
      <h1> Memory Game</h1>
      <Game nElements={10}/>
    </div>
  )
}

export default App;