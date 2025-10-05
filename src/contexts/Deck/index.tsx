import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import shuffle from 'lodash/shuffle';
import take from 'lodash/take';

import { SUITS, RANKS, CardType, RankType, SuitType } from '../../constants';

export interface DeckContextState {
  cards: CardType[];
  archive: CardType[];
  remaining: number;
}

export interface DeckContextActions {
  reset: () => void;
  drawCard: (count?: number) => CardType[];
}

export type DeckContextValue = [DeckContextState, DeckContextActions];

export const DeckContext = createContext<DeckContextValue | undefined>(undefined);

const getNewDeck = (): CardType[] => {
  const allCards: CardType[] = RANKS.map(({ name: rank, value }: RankType) => {
    return SUITS.map(({ name: suit }: SuitType) => ({
      rank,
      suit,
      value,
    }));
  }).reduce((deckCards: CardType[], suitCards: CardType[]) => {
    return [...deckCards, ...suitCards];
  }, []);
  // return shuffle(allCards);
  // Make game easy
  const a = [...allCards].splice(0, 40);
  const b = [...allCards].splice(40);
  return [...shuffle(a), ...b];
};

const splitDeck = (cards: CardType[], count: number): [CardType[], CardType[]] => {
  const cardsCopy = [...cards]; // copy
  const drawn = take(cardsCopy, count);
  const remaining = cardsCopy.slice(count);

  return [drawn, remaining];
};

interface DeckProviderProps {
  children: ReactNode;
}

const DeckProvider: React.FC<DeckProviderProps> = ({ children }) => {
  const [cards, setCards] = useState<CardType[]>(getNewDeck());
  const [archive, setArchives] = useState<CardType[]>([]);
  const [remaining, setRemaining] = useState<number>(0);

  const reset = (): void => {
    setCards(getNewDeck());
    setArchives([]);
  };

  const drawCard = (count: number = 1): CardType[] => {
    const [drawn, remainingCards] = splitDeck(cards, count);

    setArchives([...archive, ...drawn]);
    setCards(remainingCards);

    return drawn;
  };

  useEffect(() => {
    setRemaining(cards.length);
  }, [cards, archive]);

  const state: DeckContextState = {
    cards,
    archive,
    remaining,
  };

  const actions: DeckContextActions = {
    reset,
    drawCard,
  };

  return (
    <DeckContext.Provider value={[state, actions]}>
      {children}
    </DeckContext.Provider>
  );
};

export function useDeck(): DeckContextValue {
  const context = useContext(DeckContext);
  if (context === undefined) {
    throw new Error('useDeck must be used within a DeckProvider');
  }
  return context;
}

export default DeckProvider;