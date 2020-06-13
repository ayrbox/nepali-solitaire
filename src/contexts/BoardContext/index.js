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
    console.log(key, card);
  };

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
