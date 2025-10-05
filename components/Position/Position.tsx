import React from 'react';
import clsx from 'clsx';
import Card from '../Card';
import { CardType } from '../../lib/constants';

import styles from './position.module.scss';

interface PositionProps {
  cards: CardType[];
  onClick: (e: React.MouseEvent) => void;
  selected: boolean;
}

const Position: React.FC<PositionProps> = ({ cards, onClick, selected }) => {
  const isEmpty = !cards.length;

  const positionClass = clsx(styles.position, {
    [styles.empty]: isEmpty,
    [styles.selected]: selected,
  });

  const reversed = [...cards].reverse();

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(e as any);
    }
  };

  return (
    <div
      className={positionClass}
      onClick={onClick}
      onKeyUp={handleKeyUp}
      role="button"
      tabIndex={0}
    >
      {reversed.map((card) => (
        <div
          key={`card-${card.suit}-${card.rank}`}
          className={styles.cardWrapper}
        >
          <Card suit={card.suit} rank={card.rank} selected={false} />
        </div>
      ))}
    </div>
  );
};

export default Position;
