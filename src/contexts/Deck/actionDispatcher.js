import shuffle from "lodash/shuffle";

import { INITIALISE, DRAW_CARD, RESET } from "./actionTypes";
import { SUITS, RANKS } from "../../constants";

const getNewDeck = () => {
  const allCards = RANKS.map(({ name: rank, value }) => {
    return SUITS.map(({ name: suit }) => ({
      rank,
      suit,
      value
    }));
  }).reduce((deckCards, suitCards) => {
    return [...deckCards, ...suitCards];
  }, []);

  return shuffle(allCards);
};

export const initialiseDispatcher = dispatch => () => {
  dispatch({
    type: INITIALISE,
    payload: getNewDeck()
  });
};

export const resetDispatcher = dispatch => () => {
  dispatch({
    type: RESET,
    payload: getNewDeck()
  });
};

export const drawCardDispatcher = dispatch => () => {
  dispatch({
    type: DRAW_CARD
  });
};
