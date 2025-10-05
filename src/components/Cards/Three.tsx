import React from "react";
import CardBase from "../CardBase";
import { SuitName, SUIT } from "../../constants";

import cardsStyles from "./cards.module.scss";

interface ThreeProps {
  suit: SuitName;
  selected: boolean;
}

const Three: React.FC<ThreeProps> = ({ suit, selected }) => {
  const { symbol } = SUIT[suit];

  return (
    <CardBase suit={suit} rank="three" selected={selected}>
      <span
        className={cardsStyles.topCenter}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />

      <span
        className={cardsStyles.middleCenter}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />

      <span
        className={cardsStyles.bottomCenter}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
    </CardBase>
  );
};

export default Three;
