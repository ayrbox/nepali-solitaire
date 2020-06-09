import React from "react";
import clsx from "clsx";
import cardStyles from "./card.module.scss";

import { RANK, SUIT } from "../constants";

// TODO: change number to name
const Card = ({ rank, suit }) => {
  const { symbol: suitSymbol, color } = SUIT[suit];
  const { symbol: rankSymbol } = RANK[rank];

  return (
    <div className={cardStyles.card} style={{ color }}>
      <div className={clsx(cardStyles.corner, cardStyles.top)}>
        <span className={cardStyles.number}>{rankSymbol}</span>
        <span dangerouslySetInnerHTML={{ __html: suitSymbol }} />
      </div>
      <div className={clsx(cardStyles.corner, cardStyles.bottom)}>
        <span className={cardStyles.number}>{rankSymbol}</span>
        <span dangerouslySetInnerHTML={{ __html: suitSymbol }} />
      </div>
    </div>
  );
};

export default Card;
