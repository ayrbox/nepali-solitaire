import React from 'react';
import clsx from 'clsx';

type Suit = 'Club' | 'Diamond' | 'Spade' | 'Heart';
type RankName =
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

export type Card = `${RankName}_Of_${Suit}`;

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

export type CardName = keyof typeof deckOfCards;
export const deckOfCards: Record<Card, { suit: Suit; rank: Rank }> = {
  Ace_Of_Club: { suit: 'Club', rank: 'A' },
  '2_Of_Club': { suit: 'Club', rank: '2' },
  '3_Of_Club': { suit: 'Club', rank: '3' },
  '4_Of_Club': { suit: 'Club', rank: '4' },
  '5_Of_Club': { suit: 'Club', rank: '5' },
  '6_Of_Club': { suit: 'Club', rank: '6' },
  '7_Of_Club': { suit: 'Club', rank: '7' },
  '8_Of_Club': { suit: 'Club', rank: '8' },
  '9_Of_Club': { suit: 'Club', rank: '9' },
  '10_Of_Club': { suit: 'Club', rank: '10' },
  Jack_Of_Club: { suit: 'Club', rank: 'J' },
  Queen_Of_Club: { suit: 'Club', rank: 'Q' },
  King_Of_Club: { suit: 'Club', rank: 'K' },

  Ace_Of_Spade: { suit: 'Spade', rank: 'A' },
  '2_Of_Spade': { suit: 'Spade', rank: '2' },
  '3_Of_Spade': { suit: 'Spade', rank: '3' },
  '4_Of_Spade': { suit: 'Spade', rank: '4' },
  '5_Of_Spade': { suit: 'Spade', rank: '5' },
  '6_Of_Spade': { suit: 'Spade', rank: '6' },
  '7_Of_Spade': { suit: 'Spade', rank: '7' },
  '8_Of_Spade': { suit: 'Spade', rank: '8' },
  '9_Of_Spade': { suit: 'Spade', rank: '9' },
  '10_Of_Spade': { suit: 'Spade', rank: '10' },
  Jack_Of_Spade: { suit: 'Spade', rank: 'J' },
  Queen_Of_Spade: { suit: 'Spade', rank: 'Q' },
  King_Of_Spade: { suit: 'Spade', rank: 'K' },

  Ace_Of_Diamond: { suit: 'Diamond', rank: 'A' },
  '2_Of_Diamond': { suit: 'Diamond', rank: '2' },
  '3_Of_Diamond': { suit: 'Diamond', rank: '3' },
  '4_Of_Diamond': { suit: 'Diamond', rank: '4' },
  '5_Of_Diamond': { suit: 'Diamond', rank: '5' },
  '6_Of_Diamond': { suit: 'Diamond', rank: '6' },
  '7_Of_Diamond': { suit: 'Diamond', rank: '7' },
  '8_Of_Diamond': { suit: 'Diamond', rank: '8' },
  '9_Of_Diamond': { suit: 'Diamond', rank: '9' },
  '10_Of_Diamond': { suit: 'Diamond', rank: '10' },
  Jack_Of_Diamond: { suit: 'Diamond', rank: 'J' },
  Queen_Of_Diamond: { suit: 'Diamond', rank: 'Q' },
  King_Of_Diamond: { suit: 'Diamond', rank: 'K' },

  Ace_Of_Heart: { suit: 'Heart', rank: 'A' },
  '2_Of_Heart': { suit: 'Heart', rank: '2' },
  '3_Of_Heart': { suit: 'Heart', rank: '3' },
  '4_Of_Heart': { suit: 'Heart', rank: '4' },
  '5_Of_Heart': { suit: 'Heart', rank: '5' },
  '6_Of_Heart': { suit: 'Heart', rank: '6' },
  '7_Of_Heart': { suit: 'Heart', rank: '7' },
  '8_Of_Heart': { suit: 'Heart', rank: '8' },
  '9_Of_Heart': { suit: 'Heart', rank: '9' },
  '10_Of_Heart': { suit: 'Heart', rank: '10' },
  Jack_Of_Heart: { suit: 'Heart', rank: 'J' },
  Queen_Of_Heart: { suit: 'Heart', rank: 'Q' },
  King_Of_Heart: { suit: 'Heart', rank: 'K' },
};

const getRenderDetail = (suit: Suit): { sym: CardSymbol; color: CardColor } => {
  switch (suit) {
    case 'Club':
      return { sym: '&clubs;', color: '#000' };
    case 'Spade':
      return { sym: '&spades;', color: '#000' };
    case 'Diamond':
      return { sym: '&diams;', color: '#df0000' };
    case 'Heart':
      return { sym: '&hearts;', color: '#df0000' };
  }
};

const Base: React.FC<{
  children: React.ReactNode;
  suit: Suit;
  rank: Rank;
  selected?: boolean;
}> = ({ children, suit, rank, selected = false }) => {
  const { color, sym } = getRenderDetail(suit);
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
        <span
          className="block text-2xl font-bold"
          dangerouslySetInnerHTML={{ __html: sym }}
        />
      </div>
      <div className="border h-full flex items-center justify-center">
        {children}
      </div>
      <div className="leading-none absolute text-center bottom-3 right-2 rotate-180">
        <span className="block text-2xl font-bold leading-3 h-3">{rank}</span>
        <span
          className="block text-2xl font-bold"
          dangerouslySetInnerHTML={{ __html: sym }}
        />
      </div>
    </div>
  );
};

const NewCard: React.FC<CardProps> = ({ card, selected }) => {
  const { rank, suit } = deckOfCards[card];
  return (
    <Base rank={rank} suit={suit}>
      MORE HERE
    </Base>
  );
  //return <CardToRender suit={suit} selected={selected} />;
};

export default NewCard;
