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

    let allCards = document.querySelectorAll(".card");
    let cardsArray = [...allCards];

    let allCardsContent = document.querySelectorAll(".cardImg, .cardName");
    let allCardsContentArray = [...allCardsContent];

    cardsArray.forEach((item) => {
      allCardsContentArray.forEach(
        (card) => (card.style.visibility = "hidden")
      );
      item.classList.remove("flip");
      void item.offsetWidth;
      item.classList.add("flip");

      item.addEventListener("animationend", function handleAnimationEnd() {
        item.classList.remove("flip");
        item.removeEventListener("animationend", handleAnimationEnd);
        allCardsContentArray.forEach(
          (card) => (card.style.visibility = "visible")
        );
      });
    });
  }

  useEffect(() => {
    async function fetchPokeUrl() {
      const pokeData = await getData(pokeID);
      setPokeUrl(pokeData.sprites.front_default);
      setPokeName(pokeData.species.name.toUpperCase());
    }

    fetchPokeUrl();
  }, [pokeID]);

  return (
    <>
      <div className="card" onClick={handleCardClick}>
        <img src={pokeUrl} alt={pokeName} className="cardImg" />
        <div className="cardName">
          <p>{pokeName}</p>
        </div>
      </div>
    </>
  );
}

export default DisplayCard;
