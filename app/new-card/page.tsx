import React from 'react';

import {
  SUITS,
  RANKS,
  CardType,
  RankType,
  SuitType,
  RankName,
  SuitName,
} from '../../lib/constants';
import NewCard, { Card } from '../../components/Card/NewCard';

const deck = new Map<Card, { name: string; sym: string; color: string }>([
  ['Ace_Of_Spade', { name: 'A', sym: '&clubs', color: '#000' }],
  ['Ace_Of_Club', { name: 'A', sym: '&clubs', color: '#000' }],
]);

const Samples: React.FC = () => {
  const allCards: CardType[] = RANKS.map(({ name: rank, value }: RankType) => {
    return SUITS.map(({ name: suit }: SuitType) => ({
      rank: rank as RankName,
      suit: suit as SuitName,
      value,
    }));
  }).reduce((deckCards: CardType[], suitCards: CardType[]) => {
    return [...deckCards, ...suitCards];
  }, []);

  return (
    <>
      <div className="grid grid-cols-7 gap-y-4 justify-items-center">
        {allCards.map(({ rank, suit }, index) => (
          <NewCard
            key={`${rank}-${suit}-${index}`}
            suit={suit}
            rank={rank}
            selected={false}
          />
        ))}
      </div>
    </>
  );
};

export default Samples;
