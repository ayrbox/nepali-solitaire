import React from "react";
import CardBase from "../CardBase";

import cardsStyles from "./cards.module.scss";
import { SUIT } from "../../constants";

const Ace = ({ suit }) => {
  const { symbol } = SUIT[suit];
  return (
    <CardBase suit={suit} rank="seven">
      <span
        className={cardsStyles.middleCenterLarge}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
    </CardBase>
  );
};

export default Ace;
