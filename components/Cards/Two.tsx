import React from "react";
import CardBase from "../CardBase";
import { SuitName, SUIT } from "../../lib/constants";
import { cardPositions } from "./cardPositions";

interface TwoProps {
  suit: SuitName;
  selected: boolean;
}

const Two: React.FC<TwoProps> = ({ suit, selected }) => {
  const { symbol } = SUIT[suit];
  return (
    <CardBase suit={suit} rank="two" selected={selected}>
      <span
        className={cardPositions.topCenter}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardPositions.bottomCenter}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
    </CardBase>
  );
};

export default Two;
