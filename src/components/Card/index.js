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

// TODO: card rank maping could have been automatic
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
};

const Card = ({ rank, suit }) => {
  const CardToRender = CARD_MAPPING[rank];
  return <CardToRender suit={suit} />;
};

export default Card;
