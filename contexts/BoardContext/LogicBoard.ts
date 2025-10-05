import { CardType } from '../../lib/constants';

export const BOARD_SIZE = 12;

export interface BoardPosition {
  cards: CardType[];
}

export interface BoardState {
  [key: string]: BoardPosition;
}

export const generateBoard = (): BoardState => {
  return new Array(BOARD_SIZE).fill(0).reduce(
    (acc: BoardState, _, idx: number) => ({
      ...acc,
      [`00${idx}`]: {
        cards: [],
      },
    }),
    {}
  );
};