import "./App.css";
import "./App.scss";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";
import React from "react";

function App() {
  // pre-game settings
  const [isGameOn, setIsGameOn] = React.useState(false);

  async function startGame(e) {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://emojihub.yurace.pro/api/all/category/animals-and-nature"
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setIsGameOn(true);
      } else {
        throw new Error("Failed to fecth anything... baka!");
      }
    } catch (error) {
      console.error(error);
    }
  }

  // in-game settings
  function turnCard() {
    console.log("Memory card clicked");
  }

  // interacting with cards
  return (
    <main>
      <h1>The Memory Game of All Time</h1>
      {!isGameOn && <Form startGame={startGame} />}
      {isGameOn && <MemoryCard turnCard={turnCard} />}
    </main>
  );
}

export default App;
