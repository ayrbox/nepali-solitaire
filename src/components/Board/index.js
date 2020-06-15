import React, { useState } from 'react';
import { useDeck } from '../../contexts/Deck';
import { useBoard } from '../../contexts/BoardContext';

import Card from '../Card';

const Board = () => {
  const [cards, setCards] = useState([]);
  const [_, { reset, drawCard }] = useDeck();
  const [
    { board },
    { reset: resetBoard, placeCard, selectBoardItem },
  ] = useBoard();

  const handleReset = e => {
    e.preventDefault();
    reset(); // reset card deck
    resetBoard(); // reset board
  };

  const handleStart = e => {
    e.preventDefault();

    // // on start draw cards for each board item
    // // and place on board
    const boardSize = Object.keys(board).length;
    const drawnCards = drawCard(boardSize);

    Object.entries(board).forEach(([key, value], idx) => {
      placeCard({ key, card: drawnCards[idx] });
    });
  };

  const handleDraw = e => {
    e.preventDefault();
    setCards(drawCard(1));
  };

  const handleCardClick = key => e => {
    e.preventDefault();
    selectBoardItem({
      key,
    });
  };

  return (
    <>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleDraw} disabled={_.remaining === 0}>
        Draw
      </button>
      <button onClick={handleReset} disabled={_.remaining > 0}>
        Reset
      </button>

      <pre>{JSON.stringify(_)}</pre>

      {Object.keys(board).map(boardKey => {
        const { cards, selected } = board[boardKey];

        const { suit, rank } = cards[0] || {
          suit: 'spade', // allow card to draw empty
          rank: 'ace',
        };

        return (
          <div onClick={handleCardClick(boardKey)} key={`${boardKey}`}>
            <Card suit={suit} rank={rank} selected={selected} />
          </div>
        );
      })}

      {/* TODO: Draw current state in hidden modal */}
      <pre>{JSON.stringify(board, null, 2)}</pre>
    </>
  );
};

export default Board;
