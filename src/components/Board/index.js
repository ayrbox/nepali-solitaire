import React, { useState } from 'react';
import { useDeck } from '../../contexts/Deck';
import { useBoard } from '../../contexts/BoardContext';

import Card from '../Card';

const Board = () => {
  const [cards, setCards] = useState([]);
  const [_, { reset, drawCard }] = useDeck();
  const [{ board }, { reset: resetBoard, placeCard }] = useBoard();

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
    // console.log(_.cards, drawnCards);

    Object.entries(board).forEach(([key, value], idx) => {
      placeCard({ key, card: drawnCards[idx] });
    });
  };

  const handleDraw = e => {
    e.preventDefault();
    setCards(drawCard(1));
  };

  return (
    <>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleDraw}>Draw</button>
      <button onClick={handleReset}>Reset</button>

      <pre>{JSON.stringify(_)}</pre>
      <pre>{JSON.stringify(board, null, 2)}</pre>

      <div>
        {cards.map(({ suit, rank, selected }) => (
          <Card
            key={`${suit}-${rank}`}
            suit={suit}
            rank={rank}
            selected={selected}
          />
        ))}
      </div>
    </>
  );
};

export default Board;
