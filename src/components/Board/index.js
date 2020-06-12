import React from "react";
import { useDeck } from "../../contexts/Deck";

import Card from "../Card";

const Board = () => {
  const [state, actions] = useDeck();

  const { initialise } = actions;
  const { cards } = state;

  const handleStart = e => {
    e.preventDefault();
    console.log("Initialising....", initialise);
    initialise();
  };

  console.log("State >>>>>>>>>>>", state);

  return (
    <>
      <button onClick={handleStart}>Start</button>
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
