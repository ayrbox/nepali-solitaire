import React from 'react';
import CardBase from '../CardBase';
import { SuitName, SUIT } from '../../lib/constants';

interface AceProps {
  suit: SuitName;
  selected: boolean;
}

const Ace: React.FC<AceProps> = ({ suit, selected }) => {
  const { symbol } = SUIT[suit];
  return (
    <CardBase suit={suit} rank="ace" selected={selected}>
      <div className="h-full w-full flex items-center justify-center">
        <span
          className="text-9xl"
          dangerouslySetInnerHTML={{ __html: symbol }}
        />
      </div>
    </CardBase>
  );
};

export default Ace;
