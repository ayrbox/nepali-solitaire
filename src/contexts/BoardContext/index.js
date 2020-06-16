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
          cards: [card, ...cards], // unshifting card position
        },
      };
    });
  };

  const checkGame = (first, second) => {
    const { cards: firstStack } = board[first];
    const { cards: secondStack } = board[second];

    const _1 = firstStack[0];
    const _2 = secondStack[0];

    return _1.value + _2.value === 11;
  };

  const state = {
    board,
  };

  const actions = {
    reset,
    placeCard,
    checkGame,
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
