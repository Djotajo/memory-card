import { useEffect, useState } from "react";

function DisplayCard({
  pokeID,
  shuffleDeck,
  updatePrevCards,
  prevCards,
  setPrevCards,
}) {
  const [pokeName, setPokeName] = useState("");
  const [pokeUrl, setPokeUrl] = useState("");

  async function getData(pokemon) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const responseJson = await response.json();
    return responseJson;
  }

  function handleCardClick(event) {
    event.preventDefault;
    let item = event.target.alt;
    shuffleDeck();
    updatePrevCards(prevCards, setPrevCards, item);
  }

  useEffect(() => {
    async function fetchPokeUrl() {
      const pokeData = await getData(pokeID);
      setPokeUrl(pokeData.sprites.front_default);
      setPokeName(pokeData.name);
    }

    fetchPokeUrl();
  }, [pokeID]);

  return (
    <>
      <div className="card">
        <img src={pokeUrl} alt={pokeName} onClick={handleCardClick} />
        <p>{pokeName}</p>
      </div>
    </>
  );
}

export default DisplayCard;
