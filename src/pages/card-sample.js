import React from 'react';

import '../sass/main.scss';

import { SUITS, RANKS } from '../constants';
import Card from '../components/Card';

const Samples = () => {
  const allCards = RANKS.map(({ name: rank, value }) => {
    return SUITS.map(({ name: suit }) => ({
      rank,
      suit,
      value,
    }));
  }).reduce((deckCards, suitCards) => {
    return [...deckCards, ...suitCards];
  }, []);
  return (
    <div style={{ fontSize: '14.5px' }}>
      {allCards.map(({ rank, suit }) => (
        <Card suit={suit} rank={rank} selected={false} />
      ))}

      <pre>{JSON.stringify(allCards, null, 2)}</pre>
    </div>
  );
};

export default Samples;
