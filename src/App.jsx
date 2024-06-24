import { useState } from "react";
import DisplayImage from "./displayImage";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [prevCards, setPrevCards] = useState([]);
  // const [name, setName] = useState("");

  // async function getData(pokemon) {
  //   const response = await fetch(
  //     `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  //   );
  //   const responseJson = await response.json();
  //   setName(JSON.stringify(responseJson.sprites.front_default));
  //   return responseJson;
  // }

  return (
    <>
      <p>{currentScore}</p>
      <p>{highscore}</p>
      {/* <p>{name}</p> */}
      {/* <p>{JSON.stringify(getData("ditto"))}</p> */}
      <DisplayImage pokeName="ditto" />
      <div>test</div>
    </>
  );
}

export default App;
