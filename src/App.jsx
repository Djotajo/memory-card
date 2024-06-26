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

  function handleCardClick() {
    setCurrentDeck([...shuffleDeck(currentDeck)]);
    console.log(currentDeck);
  }

  return (
    <>
      <p>{currentScore}</p>
      <p>{highscore}</p>
      <div className="cards">
        <DisplayDeck array={currentDeck} shuffleDeck={handleCardClick} />
      </div>
    </>
  );
}

export default App;
