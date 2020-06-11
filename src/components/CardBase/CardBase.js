import React from "react";
import cardStyles from "./cardbase.module.scss";

import { RANK, SUIT } from "../../constants";

const Card = ({ children, rank, suit }) => {
  const { symbol: suitSymbol, color } = SUIT[suit];
  const { symbol: rankSymbol } = RANK[rank];

  return (
    <div className={cardStyles.card} style={{ color }}>
      <div className={cardStyles.cardCornerTop}>
        <span className={cardStyles.number}>{rankSymbol}</span>
        <span dangerouslySetInnerHTML={{ __html: suitSymbol }} />
      </div>
      {children}
      <div className={cardStyles.cardCornerBottom}>
        <span className={cardStyles.number}>{rankSymbol}</span>
        <span dangerouslySetInnerHTML={{ __html: suitSymbol }} />
      </div>
    </div>
  );
};

export default Card;
