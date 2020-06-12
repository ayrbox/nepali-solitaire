import React, { createContext, useContext, useReducer } from "react";

import initialState from "./initialState";
import reducer from "./reducer";
import {
  initialiseDispatcher,
  resetDispatcher,
  drawCardDispatcher
} from "./actionDispatcher";

export const DeckContext = createContext(); // move to diff file

const DeckProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = {
    initialise: initialiseDispatcher(dispatch),
    reset: resetDispatcher(dispatch),
    drawcard: drawCardDispatcher(dispatch)
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
