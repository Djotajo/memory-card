import DisplayCard from "./displayCard";

function DisplayDeck({ array }) {
  let list;
  array
    ? (list = array.map((item) => <DisplayCard pokeID={item} key={item} />))
    : null;

  return <>{list}</>;
}

export default DisplayDeck;
