'use client';

import React, {
  ButtonHTMLAttributes,
  EventHandler,
  MouseEventHandler,
} from 'react';

import {
  SUITS,
  RANKS,
  CardType,
  RankType,
  SuitType,
  RankName,
  SuitName,
} from '../../lib/constants';
import NewCard, { CardName, deckOfCards } from '../../components/Card/NewCard';
import { shuffle } from 'lodash';

const cards: CardName[] = Object.keys(deckOfCards) as CardName[];

const Samples: React.FC = () => {
  const [deck, setDeck] = React.useState<CardName[]>(cards);

  const handleShuffle: MouseEventHandler = (e) => {
    e.preventDefault();
    setDeck(shuffle(deck));
  };

  return (
    <>
      <button
        type="button"
        onClick={handleShuffle}
        className="p-3 bg-red-400 rounded"
      >
        Shuffle
      </button>
      <div className="grid grid-cols-7 gap-y-4 justify-items-center">
        {deck.map((key) => (
          <NewCard key={key} card={key} selected={false} />
        ))}
      </div>
      <pre>{JSON.stringify(deck, null, 2)}</pre>
    </>
  );
};

export default Samples;
