import './App.css';
import './App.scss'
import Form from "./components/Form"
import MemoryCard from './components/MemoryCard';
import React from 'react';

function App() {

  // pre-game settings
  const [isGameOn, setIsGameOn] = React.useState(false)
  function startGame(e){
    e.preventDefault();
    setIsGameOn(true)
  }

  // in-game settings
  function turnCard() {
    console.log("Memory card clicked")
  }

  // interacting with cards
  return (
    <main>
      <h1>The Memory Game of All Time</h1>
      {/* {!isGameOn && <Form startGame = {startGame} />}
      {isGameOn && <MemoryCard turnCard = {turnCard} />} */}

      <MemoryCard turnCard = {turnCard} />

    </main>
  );
}

export default App;
