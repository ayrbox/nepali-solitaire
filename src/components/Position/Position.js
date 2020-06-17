import React from 'react';
import clsx from 'clsx';
import Card from '../Card';

import styles from './position.module.scss';

const Position = ({ cards, onClick, selected }) => {
  const isEmpty = !cards.length;

  const positionClass = clsx(styles.position, {
    [styles.empty]: isEmpty,
    [styles.selected]: selected,
  });

  const reversed = [...cards].reverse();

  return (
    <div
      className={positionClass}
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      tabIndex={0}
    >
      {reversed.map(card => (
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
