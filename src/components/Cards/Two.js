import React from "react";
import CardBase from "../CardBase";

import cardsStyles from "./cards.module.scss";
import { SUIT } from "../../constants";

const Two = ({ suit }) => {
  const { symbol } = SUIT[suit];
  return (
    <CardBase suit={suit} rank="two">
      <span
        className={cardsStyles.topCenter}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
      <span
        className={cardsStyles.bottomCenter}
        dangerouslySetInnerHTML={{ __html: symbol }}
      />
    </CardBase>
  );
};

export default Two;
