import React from "react";
import CardBase from "../CardBase";
import { SuitName, SUIT } from "../../lib/constants";

import cardsStyles from "./cards.module.scss";

interface SevenProps {
  suit: SuitName;
  selected: boolean;
}

const Seven: React.FC<SevenProps> = ({ suit, selected }) => {
  const { symbol } = SUIT[suit];
  return (
    <CardBase suit={suit} rank="seven" selected={selected}>
      <span
        className={cardsStyles.topLeft}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardsStyles.topRight}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardsStyles.middleLeft}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardsStyles.middleTop}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardsStyles.middleRight}
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

export default Seven;
