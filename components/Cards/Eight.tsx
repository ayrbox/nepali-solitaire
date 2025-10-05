import React from "react";
import CardBase from "../CardBase";
import { SuitName, SUIT } from "../../lib/constants";

import { cardPositions } from "./cardPositions";

interface EightProps {
  suit: SuitName;
  selected: boolean;
}

const Eight: React.FC<EightProps> = ({ suit, selected }) => {
  const { symbol } = SUIT[suit];
  return (
    <CardBase suit={suit} rank="eight" selected={selected}>
      <span
        className={cardPositions.topLeft}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardPositions.topRight}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardPositions.middleLeft}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardPositions.middleTop}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />

      <span
        className={cardPositions.middleBottom}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardPositions.middleRight}
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

export default Eight;
