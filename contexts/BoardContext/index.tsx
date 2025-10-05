'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

import { generateBoard, BoardState } from './LogicBoard';
import { CardType } from '../../lib/constants';

export interface BoardContextState {
  board: BoardState;
}

export interface BoardContextActions {
  reset: () => void;
  placeCard: (params: { key: string; card: CardType }) => void;
  checkGame: (first: string, second: string) => boolean;
}

export type BoardContextValue = [BoardContextState, BoardContextActions];

export const BoardContext = createContext<BoardContextValue | undefined>(
  undefined
);

interface BoardProviderProps {
  children: ReactNode;
}

const BoardProvider: React.FC<BoardProviderProps> = ({ children }) => {
  const [board, setBoard] = useState<BoardState>(generateBoard());

  const reset = (): void => setBoard(generateBoard());

  const placeCard = ({ key, card }: { key: string; card: CardType }): void => {
    setBoard((state) => {
      const { cards } = state[key];
      return {
        ...state,
        [key]: {
          cards: [card, ...cards], // unshifting card position
        },
      };
    });
  };

  const checkGame = (first: string, second: string): boolean => {
    const { cards: firstStack } = board[first];
    const { cards: secondStack } = board[second];

    const _1 = firstStack[0];
    const _2 = secondStack[0];

    return _1.value + _2.value === 11;
  };

  const state: BoardContextState = {
    board,
  };

  const actions: BoardContextActions = {
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

export function useBoard(): BoardContextValue {
  const context = useContext(BoardContext);
  if (context === undefined) {
    throw new Error('useBoard must be used within a BoardProvider');
  }
  return context;
}

export default BoardProvider;
