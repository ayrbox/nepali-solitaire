import React from 'react';
import clsx from 'clsx';

type Suit = 'Club' | 'Diamond' | 'Spade' | 'Heart';
type RankFull =
  | 'Ace'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'Jack'
  | 'Queen'
  | 'King';

export type Card = `${RankFull}_Of_${Suit}`;

import {
  Ace,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King,
} from '../Cards';

const CARD_MAPPING = {
  ace: Ace,
  two: Two,
  three: Three,
  four: Four,
  five: Five,
  six: Six,
  seven: Seven,
  eight: Eight,
  nine: Nine,
  ten: Ten,
  jack: Jack,
  queen: Queen,
  king: King,
} as const;

interface CardProps {
  card: Card;
  selected: boolean;
}

type CardSymbol = '&clubs;' | '&diams;' | '&spades;' | '&hearts;';
type CardColor = '#000' | '#df0000';
type Rank =
  | 'A'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'J'
  | 'Q'
  | 'K';

const Base: React.FC<{
  children: React.ReactNode;
  symbol: CardSymbol;
  rank: Rank;
  selected?: boolean;
}> = ({ children, symbol, rank, selected = false }) => {
  let color: CardColor = '#000';
  switch (symbol) {
    case '&clubs;':
    case '♠':
      color = '#000';
      break;
    case '&diams;':
    case '&hearts;':
    default:
      color = '#df0000';
      break;
  }
  console.log('>>>', color, symbol);

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
        <span className="block text-2xl font-bold leading-3 h-3">{rank}</span>
        <span className="block text-2xl font-bold">{symbol}</span>
      </div>
      <div className="border h-full flex items-center justify-center">
        {children}
      </div>
      <div className="leading-none absolute text-center bottom-3 right-2 rotate-180">
        <span className="block text-2xl font-bold leading-3 h-3">{rank}</span>
        <span className="block text-2xl font-bold">{symbol}</span>
      </div>
    </div>
  );
};

const NewCard: React.FC<CardProps> = ({ card, selected }) => {
  return (
    <Base rank="A" symbol="&spades;">
      MORE HERE
    </Base>
  );
  //return <CardToRender suit={suit} selected={selected} />;
};

export default NewCard;
