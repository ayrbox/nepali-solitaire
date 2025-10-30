'use client';

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import uniq from 'lodash/uniq';

import { useDeck } from '../../contexts/Deck';
import { useBoard } from '../../contexts/BoardContext';

import Position from '../Position';

const Board: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const [deckState, { reset: resetDeck, drawCard }] = useDeck();
  const [{ board }, { placeCard, checkGame }] = useBoard();

  useEffect(() => {
    if (selectedItems.length === 2) {
      const [key1, key2] = selectedItems;

      if (checkGame(key1, key2)) {
        const [card1, card2] = drawCard(2);

        placeCard({ key: key1, card: card1 });
        placeCard({ key: key2, card: card2 });
      }
      setSelectedItems([]);
    }
  }, [selectedItems, checkGame, drawCard, placeCard]);

  useEffect(() => {
    resetDeck();

    const boardSize = Object.keys(board).length;
    const drawnCards = drawCard(boardSize);

    Object.entries(board).forEach(([key], idx) => {
      placeCard({ key, card: drawnCards[idx] });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCardSelect = (key: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (selectedItems.includes(key)) {
      setSelectedItems((prev) => prev.filter((k) => key !== k));
    } else {
      setSelectedItems((prev) => uniq([...prev, key]));
    }
  };

  return (
    <div className="w-screen h-screen">
      <div
        className={clsx('flex flex-wrap -mx-4', {
          hidden: deckState.remaining > 0,
        })}
      >
        <div className="flex-1 px-4 text-center">
          <h1 className="text-8xl font-light leading-tight">
            You are lucky today! <br />
            <small>&nbsp;</small>
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="inline-grid grid-cols-4 grid-rows-3 gap-5 text-[12.5px]">
          {Object.keys(board).map((boardKey) => {
            const { cards } = board[boardKey];
            const isSelected = selectedItems.includes(boardKey);
            return (
              <Position
                key={`${boardKey}`}
                cards={cards}
                onClick={handleCardSelect(boardKey)}
                selected={isSelected}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Board;
