import React from "react";
import CardBase from "../CardBase";
import { SuitName, SUIT } from "../../lib/constants";

import { cardPositions } from "./cardPositions";

interface FourProps {
  suit: SuitName;
  selected: boolean;
}

const Four: React.FC<FourProps> = ({ suit, selected }) => {
  const { symbol } = SUIT[suit];
  return (
    <CardBase suit={suit} rank="four" selected={selected}>
      <span
        className={cardPositions.topLeft}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />

      <span
        className={cardPositions.topRight}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardPositions.bottomLeft}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardPositions.bottomRight}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
    </CardBase>
  );
};

export default Four;
