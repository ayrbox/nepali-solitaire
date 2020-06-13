import React from 'react';
import { useDeck } from '../../contexts/Deck';

import Card from '../Card';

const Board = () => {
  const [state, actions] = useDeck();

  const { initialise, drawCard } = actions;
  const { cards } = state;

  const handleStart = e => {
    e.preventDefault();
    console.log('Initialising Board....');
    initialise();
  };

  const handleDraw = e => {
    e.preventDefault();
    drawCard();
  };

  return (
    <>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleDraw}>Draw</button>
      <pre>{JSON.stringify(state)}</pre>
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
