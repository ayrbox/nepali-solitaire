import React from "react";
import CardBase from "../CardBase";
import { SuitName, SUIT } from "../../constants";

import cardsStyles from "./cards.module.scss";

interface EightProps {
  suit: SuitName;
  selected: boolean;
}

const Eight: React.FC<EightProps> = ({ suit, selected }) => {
  const { symbol } = SUIT[suit];
  return (
    <CardBase suit={suit} rank="eight" selected={selected}>
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
        className={cardsStyles.middleBottom}
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

export default Eight;
