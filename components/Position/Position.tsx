'use client';

import React from 'react';
import clsx from 'clsx';
import Card from '../Card';
import { CardType } from '../../lib/constants';

interface PositionProps {
  cards: CardType[];
  onClick: (e: React.MouseEvent) => void;
  selected: boolean;
}

const Position: React.FC<PositionProps> = ({ cards, onClick, selected }) => {
  const isEmpty = !cards.length;

  const positionClass = clsx(
    'border-4 border-dashed border-transparent rounded-[10px] min-w-[208px] min-h-[288px] mr-[15px] mb-[15px] relative z-[2]',
    {
      'border-white/50': isEmpty,
      'border-[#4eecae] opacity-80': selected,
    }
  );

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
      {reversed.map((card, index) => (
        <div
          key={`card-${card.suit}-${card.rank}`}
          className={clsx({
            '-mt-[280px]': index > 0,
          })}
        >
          <Card suit={card.suit} rank={card.rank} selected={false} />
        </div>
      ))}
    </div>
  );
};

export default Position;
