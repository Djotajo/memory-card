import DisplayCard from "./displayCard";

function DisplayDeck({ array, shuffleDeck }) {
  let list;
  array
    ? (list = array.map((item) => (
        <DisplayCard pokeID={item} key={item} shuffleDeck={shuffleDeck} />
      )))
    : null;

  return <>{list}</>;
}

export default DisplayDeck;
