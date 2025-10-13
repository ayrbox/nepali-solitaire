import React from 'react';
import clsx from 'clsx';

import { RANK, SUIT, RankName, SuitName } from '../../lib/constants';

interface CardBaseProps {
  children?: React.ReactNode;
  rank: RankName;
  suit: SuitName;
  selected: boolean;
}

const CardBase: React.FC<CardBaseProps> = ({
  children,
  rank,
  suit,
  selected,
}) => {
  const { symbol: suitSymbol, color } = SUIT[suit];
  const { symbol: rankSymbol } = RANK[rank];

  return (
    <div
      className={clsx(
        'bg-white font-sans rounded-xl shadow-xl w-[200px] h-[280px] border border-solid relative z-[2]',
        {
          'opacity-70': selected,
        }
      )}
      style={{ color }}
    >
      <div className="leading-none absolute text-center left-2 top-3">
        <span className="block text-2xl font-bold leading-3 h-3">
          {rankSymbol}
        </span>
        <span
          className="block text-2xl font-bold"
          dangerouslySetInnerHTML={{ __html: suitSymbol }}
        />
      </div>
      {children}
      <div className="leading-none absolute text-center bottom-3 right-2 rotate-180">
        <span className="block text-2xl font-bold leading-3 h-3">
          {rankSymbol}
        </span>
        <span
          className="block text-2xl font-bold"
          dangerouslySetInnerHTML={{ __html: suitSymbol }}
        />
      </div>
    </div>
  );
};

export default CardBase;
