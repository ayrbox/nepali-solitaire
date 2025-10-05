import React from "react";
import CardBase from "../CardBase";
import { SuitName, SUIT } from "../../lib/constants";

import cardsStyles from "./cards.module.scss";

interface AceProps {
  suit: SuitName;
  selected: boolean;
}

const Ace: React.FC<AceProps> = ({ suit, selected }) => {
  const { symbol } = SUIT[suit];
  return (
    <CardBase suit={suit} rank="ace" selected={selected}>
      <span
        className={cardsStyles.middleCenterLarge}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
    </CardBase>
  );
};

export default Ace;
