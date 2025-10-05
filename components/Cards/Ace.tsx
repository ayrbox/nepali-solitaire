import React from "react";
import CardBase from "../CardBase";
import { SuitName, SUIT } from "../../lib/constants";
import { cardPositions } from "./cardPositions";

interface AceProps {
  suit: SuitName;
  selected: boolean;
}

const Ace: React.FC<AceProps> = ({ suit, selected }) => {
  const { symbol } = SUIT[suit];
  return (
    <CardBase suit={suit} rank="ace" selected={selected}>
      <span
        className={cardPositions.middleCenterLarge}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
    </CardBase>
  );
};

export default Ace;
