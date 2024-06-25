import { useEffect, useState } from "react";
import DisplayImage from "./displayImage";
import populateDeck from "./populateDeck";
import DisplayCards from "./displayCards";

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

  return (
    <>
      <p>{currentScore}</p>
      <p>{highscore}</p>
      <DisplayCards array={currentDeck} />
    </>
  );
}

export default App;
