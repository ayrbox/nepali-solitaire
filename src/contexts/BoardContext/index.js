import React, { createContext, useContext, useState } from 'react';

export const BoardContext = createContext(); // move to diff file

const BOARD_SIZE = 12;

const generateBoard = () => {
  return new Array(BOARD_SIZE).fill(0).reduce(
    (_, __, idx) => ({
      ..._,
      ...{
        [`00${idx}`]: {
          selected: false,
          cards: [],
        },
      },
    }),
    {}
  );
};

const BoardProvider = ({ children }) => {
  const [board, setBoard] = useState(generateBoard());
  // const [archive, setArchives] = useState([]);

  const reset = () => setBoard(generateBoard());

  const placeCard = ({ key, card }) => {
    setBoard(state => {
      const { selected, cards } = state[key];
      return {
        ...state,
        [key]: {
          cards: [...cards, card],
          selected: selected,
        },
      };
    });
  };

  const selectBoardItem = ({ key, selectCard = true }) => {
    setBoard(state => {
      const { cards } = state[key];
      return {
        ...state,
        [key]: {
          cards: [...cards],
          selected: selectCard,
        },
      };
    });
  };

  const state = {
    board,
  };

  const actions = {
    reset,
    placeCard,
    selectBoardItem,
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
