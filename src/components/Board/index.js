import React, { useState, useEffect } from 'react';
import uniq from 'lodash/uniq';

import { useDeck } from '../../contexts/Deck';
import { useBoard } from '../../contexts/BoardContext';

import Card from '../Card';

const Board = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const [_, { reset, drawCard }] = useDeck();
  const [{ board }, { reset: resetBoard, placeCard }] = useBoard();

  const handleReset = e => {
    e.preventDefault();
    reset(); // reset card deck
    resetBoard(); // reset board
  };

  useEffect(() => {
    if (selectedItems.length === 2) {
      console.log('OK bite now', selectedItems);

      setSelectedItems([]);
    }
  }, [selectedItems]);

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

  const handleCardSelect = key => e => {
    e.preventDefault();
    if (selectedItems.includes(key)) {
      setSelectedItems(prev => prev.filter(k => key !== k));
    } else {
      setSelectedItems(prev => uniq([...prev, key]));
    }
  };

  return (
    <>
      <pre>{JSON.stringify(selectedItems, null, 4)}</pre>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleReset} disabled={_.remaining > 0}>
        Reset
      </button>

      {Object.keys(board).map(boardKey => {
        const { cards } = board[boardKey];

        const { suit, rank } = cards[0] || {
          suit: 'spade', // allow card to draw empty
          rank: 'ace',
        };

        const isSelected = selectedItems.includes(boardKey);

        return (
          <div onClick={handleCardSelect(boardKey)} key={`${boardKey}`}>
            <Card suit={suit} rank={rank} selected={isSelected} />
          </div>
        );
      })}

      {/* TODO: Draw current state in hidden modal */}
      <pre>BOARD STATE: {JSON.stringify(board, null, 2)}</pre>

      <pre>DECK STATE: {JSON.stringify(_, null, 2)}</pre>
    </>
  );
};

export default Board;
