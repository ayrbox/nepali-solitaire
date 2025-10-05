import React from 'react';

import { SUITS, RANKS, CardType, RankType, SuitType, RankName, SuitName } from '../lib/constants';
import Card from '../components/Card';

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
    <div style={{ fontSize: '14.5px' }}>
      {allCards.map(({ rank, suit }, index) => (
        <Card key={`${rank}-${suit}-${index}`} suit={suit} rank={rank} selected={false} />
      ))}

      <pre>{JSON.stringify(allCards, null, 2)}</pre>
    </div>
  );
};

export default Samples;