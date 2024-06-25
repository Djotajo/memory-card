import getRandomInt from "./getRandomInt";

export default function populateDeck(size) {
  const array = [];
  for (let n = 0; n < size; n++) {
    array.push(getRandomInt());
  }
  return array;
}
