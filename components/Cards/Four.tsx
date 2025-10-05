import React from "react";
import CardBase from "../CardBase";
import { SuitName, SUIT } from "../../lib/constants";

import cardsStyles from "./cards.module.scss";

interface FourProps {
  suit: SuitName;
  selected: boolean;
}

const Four: React.FC<FourProps> = ({ suit, selected }) => {
  const { symbol } = SUIT[suit];
  return (
    <CardBase suit={suit} rank="four" selected={selected}>
      <span
        className={cardsStyles.topLeft}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />

      <span
        className={cardsStyles.topRight}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardsStyles.bottomLeft}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardsStyles.bottomRight}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
    </CardBase>
  );
};

export default Four;
