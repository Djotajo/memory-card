import DisplayImage from "./displayImage";

function DisplayCards({ array }) {
  let list;
  array
    ? (list = array.map((item) => <DisplayImage pokeName={item} key={item} />))
    : null;

  return <>{list}</>;
}

export default DisplayCards;
