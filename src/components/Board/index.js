import React, { useState } from 'react';
import { useDeck } from '../../contexts/Deck';

import Card from '../Card';

const Board = () => {
  const [cards, setCards] = useState([]);
  const [, actions] = useDeck();

  const { reset, drawCard } = actions;

  const handleStart = e => {
    e.preventDefault();
    console.log('Initialising Board....');
    reset();
  };

  const handleDraw = e => {
    e.preventDefault();
    setCards(drawCard(1));
  };

  return (
    <>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleDraw}>Draw</button>
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
