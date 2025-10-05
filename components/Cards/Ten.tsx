import React from "react";
import CardBase from "../CardBase";
import { SuitName, SUIT } from "../../lib/constants";

import { cardPositions } from "./cardPositions";

interface TenProps {
  suit: SuitName;
  selected: boolean;
}

const Ten: React.FC<TenProps> = ({ suit, selected }) => {
  const { symbol } = SUIT[suit];
  return (
    <CardBase suit={suit} rank="ten" selected={selected}>
      <span
        className={cardPositions.topLeft}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardPositions.topRight}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardPositions.middleTopLeft}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardPositions.middleTopRight}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardPositions.middleBottomLeft}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardPositions.middleTopCenter}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />

      <span
        className={cardPositions.middleBottomCenter}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardPositions.middleBottomRight}
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

export default Ten;
