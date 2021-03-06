import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import uniq from 'lodash/uniq';

import { useDeck } from '../../contexts/Deck';
import { useBoard } from '../../contexts/BoardContext';
import Timer from '../Timer';

import Position from '../Position';

import styles from './board.module.scss';

const Board = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const [_, { reset: resetDeck, drawCard }] = useDeck();
  const [{ board }, { placeCard, checkGame }] = useBoard();

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
  }, [selectedItems]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    resetDeck();

    const boardSize = Object.keys(board).length;
    const drawnCards = drawCard(boardSize);

    Object.entries(board).forEach(([key, value], idx) => {
      placeCard({ key, card: drawnCards[idx] });
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCardSelect = key => e => {
    e.preventDefault();
    if (selectedItems.includes(key)) {
      setSelectedItems(prev => prev.filter(k => key !== k));
    } else {
      setSelectedItems(prev => uniq([...prev, key]));
    }
  };

  return (
    <div className={styles.boardContainer}>
      <div
        className={clsx('row', {
          'd-none': _.remaining > 0,
        })}
      >
        <div className="col text-center">
          <h1 className="display-1">
            You are lucky today! <br />
            <small>&nbsp;</small>
          </h1>
        </div>
      </div>
      <Timer stop={_.remaining === 0} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className={styles.boardWrapper} style={{ fontSize: '12.5px' }}>
          {Object.keys(board).map(boardKey => {
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
