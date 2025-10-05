import React from "react";
import clsx from "clsx";
import cardStyles from "./cardbase.module.scss";

import { RANK, SUIT, RankName, SuitName } from "../../constants";

interface CardBaseProps {
  children?: React.ReactNode;
  rank: RankName;
  suit: SuitName;
  selected: boolean;
}

const CardBase: React.FC<CardBaseProps> = ({ children, rank, suit, selected }) => {
  const { symbol: suitSymbol, color } = SUIT[suit];
  const { symbol: rankSymbol } = RANK[rank];

  return (
    <div
      className={clsx(cardStyles.card, {
        [cardStyles.cardSelected]: selected
      })}
      style={{ color }}
    >
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

export default CardBase;
