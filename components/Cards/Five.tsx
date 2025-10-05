import React from "react";
import CardBase from "../CardBase";
import { SuitName, SUIT } from "../../lib/constants";

import { cardPositions } from "./cardPositions";

interface FiveProps {
  suit: SuitName;
  selected: boolean;
}

const Five: React.FC<FiveProps> = ({ suit, selected }) => {
  const { symbol } = SUIT[suit];
  return (
    <CardBase suit={suit} rank="five" selected={selected}>
      <span
        className={cardPositions.topLeft}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardPositions.topRight}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardPositions.middleCenter}
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

export default Five;
