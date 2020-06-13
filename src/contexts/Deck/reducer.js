import * as ACTIONS from './actionTypes';

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.DRAW_CARD:
      // TODO: get count from payload

      const cards_ = [...state.cards];
      const cardToDraw = cards_.shift();

      return {
        ...state,
        cards: cards_,
        drawnCards: [cardToDraw],
        remaining: cards_.length,
        archive: [...state.archive, ...state.drawnCards],
      };
    case ACTIONS.INITIALISE:
    case ACTIONS.RESET:
      return {
        ...state,
        cards: payload,
        remaining: payload.count,
        drawnCards: [],
        archive: [],
      };
    default:
      return state;
  }
};

export default reducer;
