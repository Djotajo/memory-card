import { useEffect, useState } from "react";
import populateDeck from "./populateDeck";
import shuffleDeck from "./shuffleDeck";
import DisplayDeck from "./displayDeck";
import PlayerWins from "./playerWins";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [deckSize, setDeckSize] = useState(18);
  const [currentDeck, setCurrentDeck] = useState(null);
  const [prevCards, setPrevCards] = useState([]);
  console.log(currentDeck);

  useEffect(() => {
    function maintainDeck() {
      setCurrentDeck(populateDeck(deckSize));
    }

    maintainDeck();
  }, [deckSize]);

  useEffect(() => {
    function updateScore() {
      setCurrentScore(prevCards.length);
    }

    updateScore();
  }, [prevCards.length]);

  function updatePrevCards(prevCards, setPrevCards, newItem) {
    if (!prevCards.includes(newItem)) {
      setPrevCards([...prevCards, newItem]);
    } else {
      setPrevCards([]);
    }
  }

  useEffect(() => {
    function updateHighscore() {
      if (currentScore > highscore) {
        setHighscore(currentScore);
      }
    }

    updateHighscore();
  }, [currentScore, highscore]);

  function handleCardClick() {
    setCurrentDeck([...shuffleDeck(currentDeck)]);
  }

  function clearData() {
    setCurrentScore(0);
    setPrevCards([]);
  }

  function changeDeckSize(size) {
    setDeckSize(size);
    clearData();
  }

  return (
    <>
      <div className="header">
        {" "}
        <div>
          <h2>Score: {currentScore}</h2>
        </div>
        <div>
          <h2>Difficulty</h2>
        </div>
        <div>
          <h2>Highscore: {highscore}</h2>
        </div>
      </div>
      <div className="difficultyButtons">
        <button onClick={() => changeDeckSize(6)}>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
            alt=""
          />{" "}
        </button>
        <button onClick={() => changeDeckSize(12)}>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
            alt=""
          />
        </button>
        <button onClick={() => changeDeckSize(18)}>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
            alt=""
          />
        </button>
      </div>
      {currentScore === deckSize ? (
        <PlayerWins />
      ) : (
        <div className="cards">
          <DisplayDeck
            array={currentDeck}
            shuffleDeck={handleCardClick}
            updatePrevCards={updatePrevCards}
            prevCards={prevCards}
            setPrevCards={setPrevCards}
          />
        </div>
      )}
    </>
  );
}

export default App;
