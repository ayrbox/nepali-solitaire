import * as ACTIONS from "./actionTypes";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.DRAW_CARD:
      return {
        ...state,
        hello: "TODO: Update state"
      };
    case ACTIONS.INITIALISE:
    case ACTIONS.RESET:
      return {
        ...state,
        cards: payload,
        remaining: payload.count
      };
    default:
      return state;
  }
};

export default reducer;
