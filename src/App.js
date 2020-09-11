import React from 'react';
import Game from '../src/components/Game-v2'
import './App.css'
import GameProvider from './contexts/GameContext'

function App() {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  )
}

export default App;
