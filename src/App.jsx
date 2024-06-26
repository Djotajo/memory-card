import { useEffect, useState } from "react";
import populateDeck from "./populateDeck";
import shuffleDeck from "./shuffleDeck";
import DisplayDeck from "./displayDeck";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [deckSize, setDeckSize] = useState(15);
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

  return (
    <>
      <p>Score: {currentScore}</p>
      <p>Highscore: {highscore}</p>
      <div className="cards">
        <DisplayDeck
          array={currentDeck}
          shuffleDeck={handleCardClick}
          updatePrevCards={updatePrevCards}
          prevCards={prevCards}
          setPrevCards={setPrevCards}
        />
      </div>
    </>
  );
}

export default App;
