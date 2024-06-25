import getRandomInt from "./getRandomInt";

export default function populateDeck(size) {
  const deck = [];

  while (deck.length < size) {
    let number = getRandomInt();
    if (!deck.includes(number)) {
      deck.push(number);
    }
  }
  return deck;
}
