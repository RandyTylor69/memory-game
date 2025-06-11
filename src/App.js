import './App.css';
import './App.scss'
import Form from "./components/Form"
import React from 'react';

function App() {

  // pre-game settings
  const [isGameOn, setIsGameOn] = React.useState(false)
  function startGame(e){
    e.preventDefault();
    setIsGameOn(true)
  }

  // interacting with cards
  return (
    <main>
      <h1>The Memory Game of All Time</h1>
      <Form />
    </main>
  );
}

export default App;
