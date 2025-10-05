import React from "react";
import CardBase from "../CardBase";
import { SuitName, SUIT } from "../../constants";

import cardsStyles from "./cards.module.scss";

interface TwoProps {
  suit: SuitName;
  selected: boolean;
}

const Two: React.FC<TwoProps> = ({ suit, selected }) => {
  const { symbol } = SUIT[suit];
  return (
    <CardBase suit={suit} rank="two" selected={selected}>
      <span
        className={cardsStyles.topCenter}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardsStyles.bottomCenter}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
    </CardBase>
  );
};

export default Two;
