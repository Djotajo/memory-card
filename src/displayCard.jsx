import { useEffect, useState } from "react";

function DisplayCard({ pokeID }) {
  const [pokeName, setPokeName] = useState("");
  const [pokeUrl, setPokeUrl] = useState("");

  async function getData(pokemon) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const responseJson = await response.json();
    return responseJson;
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
        <img src={pokeUrl} alt={pokeName} />
        <p>{pokeName}</p>
      </div>
    </>
  );
}

export default DisplayCard;
