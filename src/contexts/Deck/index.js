import React, { createContext, useContext, useState } from 'react';
import shuffle from 'lodash/shuffle';
import take from 'lodash/take';

import { SUITS, RANKS } from '../../constants';

export const DeckContext = createContext(); // move to diff file

const getNewDeck = () => {
  const allCards = RANKS.map(({ name: rank, value }) => {
    return SUITS.map(({ name: suit }) => ({
      rank,
      suit,
      value,
    }));
  }).reduce((deckCards, suitCards) => {
    return [...deckCards, ...suitCards];
  }, []);

  return shuffle(allCards);
};

const DeckProvider = ({ children }) => {
  const [cards, setCards] = useState(getNewDeck());
  const [archive, setArchives] = useState([]);

  const reset = () => setCards(getNewDeck());

  const drawCard = (count = 1) => {
    const cardsCopy = [...cards];

    const drawnCards = take(cardsCopy, count);

    cardsCopy.splice(0, count);
    setCards(cardsCopy);

    setArchives([...archive, ...drawnCards]);

    return drawnCards;
  };

  const state = {
    cards,
    archive,
  };

  const actions = {
    reset,
    drawCard,
  };

  return (
    <DeckContext.Provider value={[state, actions]}>
      {children}
    </DeckContext.Provider>
  );
};

export function useDeck() {
  return useContext(DeckContext);
}

export default DeckProvider;
