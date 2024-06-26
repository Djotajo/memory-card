import DisplayCard from "./displayCard";

function DisplayDeck({
  array,
  shuffleDeck,
  updatePrevCards,
  prevCards,
  setPrevCards,
}) {
  let list;
  array
    ? (list = array.map((item) => (
        <DisplayCard
          pokeID={item}
          key={item}
          shuffleDeck={shuffleDeck}
          updatePrevCards={updatePrevCards}
          prevCards={prevCards}
          setPrevCards={setPrevCards}
        />
      )))
    : null;

  return <>{list}</>;
}

export default DisplayDeck;
