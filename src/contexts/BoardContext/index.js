import React, { createContext, useContext, useState } from 'react';

import { generateBoard } from './LogicBoard';

export const BoardContext = createContext(); // move to diff file

const BoardProvider = ({ children }) => {
  const [board, setBoard] = useState(generateBoard());
  // const [archive, setArchives] = useState([]);

  const reset = () => setBoard(generateBoard());

  const placeCard = ({ key, card }) => {
    setBoard(state => {
      const { cards } = state[key];
      return {
        ...state,
        [key]: {
          cards: [...cards, card],
        },
      };
    });
  };

  // const selectBoardItem = ({ key, selectCard = true }) => {
  //   setBoard(state => {
  //     const { cards } = state[key];
  //     return {
  //       ...state,
  //       [key]: {
  //         cards: [...cards],
  //         selected: selectCard,
  //       },
  //     };
  //   });
  // };

  const state = {
    board,
  };

  const actions = {
    reset,
    placeCard,
  };

  return (
    <BoardContext.Provider value={[state, actions]}>
      {children}
    </BoardContext.Provider>
  );
};

export function useBoard() {
  return useContext(BoardContext);
}

export default BoardProvider;
