import { useEffect, useState } from "react";

function DisplayCard({ pokeID, shuffleDeck }) {
  const [pokeName, setPokeName] = useState("");
  const [pokeUrl, setPokeUrl] = useState("");

  async function getData(pokemon) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const responseJson = await response.json();
    return responseJson;
  }

  function handleDeck(event) {
    event.preventDefault;
    shuffleDeck();
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
        <img src={pokeUrl} alt={pokeName} onClick={handleDeck} />
        <p>{pokeName}</p>
      </div>
    </>
  );
}

export default DisplayCard;
