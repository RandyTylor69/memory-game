import "./App.css";
import "./App.scss";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";
import React, { useEffect } from "react";
import Confetti from "./components/Confetti";

function App() {
  // pre-game settings
  const [isGameOn, setIsGameOn] = React.useState(false);
  const [emojiData, setEmojiData] = React.useState([]);
  const [selectedCards, setSelectedCards] = React.useState([]);
  const [matchedCards, setMatchedCards] = React.useState([]);
  const [isGameOver, setIsGameOver] = React.useState(false)
  const [emojiCategory, setEmojiCategory] = React.useState("animals-and-nature")

  function getRandomeIndices(data) {
    const randomIndicesArray = [];
    for (let i = 0; i < 5; i++) {
      randomIndicesArray.push(Math.floor(Math.random() * data.length));
    }
    return randomIndicesArray;
  }

  function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  function getEmojiArray(data, array) {
    // array = randomIndices
    let sampleEmojiArray = [];
    let pairedEmojiArray = [];
    // 1. create an array of 5 emoji objects
    for (let i = 0; i < 5; i++) {
      sampleEmojiArray.push(data[array[i]]);
    }

    // 2. duplicates that array into 5 object pairs
    pairedEmojiArray = [...sampleEmojiArray, ...sampleEmojiArray];

    // 3.use the fisher-yates shuffle
    return fisherYatesShuffle(pairedEmojiArray);
  }

  async function startGame(e) {
    e.preventDefault();
    // 1. try block
    try {
      let response = await fetch(
        `https://emojihub.yurace.pro/api/all/category/${emojiCategory}`
      );

      if (!response.ok) {
        throw new Error("Failed to fecth anything... baka!");
      }
      const data = await response.json();
      const randomIndices = getRandomeIndices(data); // i.e. 24, 35, 46, 57, 68

      const emojiArray = getEmojiArray(data, randomIndices);

      setEmojiData(emojiArray);
      setIsGameOn(true); // state setter

      // 2. catch block
    } catch (error) {
      console.error(error);
    }
  }

  // -------------------------------------------------------------
  // ---------------------------------------------in-game settings
  // -------------------------------------------------------------

  function turnCard(name, index) {
    // check if the card is in the selectedCards state
    const selectedCardEntry = selectedCards.find(
      emoji=>emoji.index === index
    );

    // add card to the selectedCard state
    if (!selectedCardEntry && selectedCards.length < 2) {
      setSelectedCards((prevArray) => [
        ...prevArray,
        {name, index },
      ]);
    }  else if (!selectedCardEntry && selectedCards.length === 2){
      setSelectedCards([{name, index}])
    }
  }

  // detect matched cards

  useEffect(() => {
    if (selectedCards.length === 2 && selectedCards[0].name === selectedCards[1].name ) {
        setMatchedCards((prevArray) => [...prevArray, ...selectedCards]);
    } 
  }, [selectedCards]); 

  // detect if game is over

  useEffect(()=>{
    if (matchedCards.length===10) {
      setIsGameOver(true)
    }
  }, [matchedCards])

  // -------------------------------------
  // ----------- S T A R T I N G ---------
  // ------------ M E N U ----------------
  // -------------------------------------

  function handleFormChange(e){
    setEmojiCategory(e.target.value)
  }

  return (
    <main>
      <h1>The Memory Game of All Time</h1>
      {!isGameOn && <Form 
        startGame={startGame}
        handleChange = {handleFormChange}
       />}
      {isGameOn && <MemoryCard 
        turnCard={turnCard} 
        emojiData={emojiData} 
        selectedCards={selectedCards}
        matchedCards={matchedCards}
      />}
      {isGameOver&& <Confetti />}
      {isGameOver && <h1 className = "win-msg">Wow. You're good at this.</h1>}
    </main>
  );
}

export default App;
