import React from "react";
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
  King
} from "../Cards";
import { RankName, SuitName } from "../../lib/constants";

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
  king: King
} as const;

interface CardProps {
  rank: RankName;
  suit: SuitName;
  selected: boolean;
}

const Card: React.FC<CardProps> = ({ rank, suit, selected }) => {
  const CardToRender = CARD_MAPPING[rank];
  return <CardToRender suit={suit} selected={selected} />;
};

export default Card;
