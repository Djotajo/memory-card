import { useEffect, useState } from "react";

function DisplayImage({ pokeName }) {
  const [pokeUrl, setPokeUrl] = useState("asa");

  async function getData(pokemon) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const responseJson = await response.json();
    //   setName(JSON.stringify(responseJson.sprites.front_default));
    return responseJson.sprites.front_default;
  }

  useEffect(() => {
    async function fetchPokeUrl() {
      const url = await getData(pokeName);
      setPokeUrl(url);
    }

    fetchPokeUrl();
  }, [pokeName]);

  return <img src={pokeUrl} alt="" />;
  //   return <p>{pokeUrl}</p>;
}

export default DisplayImage;
