import React from "react";
import CardBase from "../CardBase";

import cardsStyles from "./cards.module.scss";
import { SUIT } from "../../constants";

const Ace = ({ suit, selected }) => {
  const { symbol } = SUIT[suit];
  return (
    <CardBase suit={suit} rank="five" selected={selected}>
      <span
        className={cardsStyles.topLeft}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardsStyles.topRight}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardsStyles.middleCenter}
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

export default Ace;
