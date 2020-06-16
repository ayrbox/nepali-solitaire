import React, { useState, useEffect } from 'react';
import uniq from 'lodash/uniq';

import { useDeck } from '../../contexts/Deck';
import { useBoard } from '../../contexts/BoardContext';

import Card from '../Card';

const Board = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const [_, { reset, drawCard }] = useDeck();
  const [{ board }, { reset: resetBoard, placeCard, checkGame }] = useBoard();

  const handleReset = e => {
    e.preventDefault();
    reset(); // reset card deck
    resetBoard(); // reset board
  };

  useEffect(() => {
    if (selectedItems.length === 2) {
      const [key1, key2] = selectedItems;

      if (checkGame(key1, key2)) {
        // drawing new cards from check
        const [card1, card2] = drawCard(2);

        placeCard({ key: key1, card: card1 });
        placeCard({ key: key2, card: card2 });
      }
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
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <button onClick={handleStart}>Start</button>
          <button onClick={handleReset} disabled={_.remaining > 0}>
            Reset
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          {Object.keys(board).map(boardKey => {
            const { cards } = board[boardKey];

            const { suit, rank } = cards[0] || {
              suit: 'spade', // allow card to draw empty
              rank: 'ace',
            };

            const isSelected = selectedItems.includes(boardKey);

            // TODO: make this div a placer holder
            // It can have empty state (no cards)
            // display all cards stack
            // isSelected should be place holder not card
            return (
              <div
                onClick={handleCardSelect(boardKey)}
                key={`${boardKey}`}
                style={{ fontSize: '14px' }}
              >
                <Card suit={suit} rank={rank} selected={isSelected} />
              </div>
            );
          })}
        </div>

        <div className="col-4" style={{ backgroundColor: '#fff' }}>
          <pre>
            SELECTED CARD POSITIONS: {JSON.stringify(selectedItems, null, 4)}
          </pre>

          {/* TODO: Draw current state in hidden modal */}
          <pre style={{ maxHeight: '500px' }}>
            DECK STATE: {JSON.stringify(_, null, 2)}
          </pre>
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ backgroundColor: '#fff' }}>
          <pre>BOARD STATE: {JSON.stringify(board, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default Board;
