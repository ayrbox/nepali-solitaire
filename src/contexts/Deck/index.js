import React, { createContext, useContext, useState, useEffect } from 'react';
import shuffle from 'lodash/shuffle';
import take from 'lodash/take';

import { SUITS, RANKS } from '../../constants';

export const DeckContext = createContext();

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
  // return shuffle(allCards);
  // Make game easy
  const a = [...allCards].splice(0, 40);
  const b = [...allCards].splice(40);
  return [...shuffle(a), ...b];
};

const splitDeck = (cards, count) => {
  const _ = [...cards]; // copy
  const drawn = take(_, count);
  const remaining = _.slice(count);

  return [drawn, remaining];
};

const DeckProvider = ({ children }) => {
  const [cards, setCards] = useState(getNewDeck());
  const [archive, setArchives] = useState([]);
  const [remaining, setRemaining] = useState();

  const reset = () => {
    setCards(getNewDeck());
    setArchives([]);
  };

  const drawCard = (count = 1) => {
    const [drawn, remaining] = splitDeck(cards, count);

    setArchives([...archive, ...drawn]);
    setCards(remaining);

    return drawn;
  };

  useEffect(() => {
    setRemaining(cards.length);
  }, [cards, archive]);

  const state = {
    cards,
    archive,
    remaining,
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
