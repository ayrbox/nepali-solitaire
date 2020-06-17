import React from 'react';
import clsx from 'clsx';
import Card from '../Card';
import reverse from 'lodash/reverse';

import styles from './position.module.scss';

const Position = ({ cards, onClick, selected }) => {
  const isEmpty = true; //!cards.length;

  const positionClass = clsx(styles.position, {
    [styles.empty]: isEmpty,
    [styles.selected]: selected,
  });

  const reversed = [...cards].reverse();

  return (
    <div className={positionClass} onClick={onClick}>
      {reversed.map(card => (
        <div className={styles.cardWrapper}>
          <Card suit={card.suit} rank={card.rank} selected={false} />
        </div>
      ))}
    </div>
  );
};

export default Position;
