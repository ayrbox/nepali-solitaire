import React from "react";

const SUIT_SYMBOLS = {
  spade: <span>&spades;</span>,
  club: <span>&clubs;</span>,
  diamond: <span>&diams;</span>,
  heart: <span>&hearts;</span>
};

const Symbols = ({ suit }) => {
  const suitKey = Object.keys(SUIT_SYMBOLS).find(suitKey => suitKey === suit);

  return SUIT_SYMBOLS[suitKey] || null;
};

export default Symbols;
