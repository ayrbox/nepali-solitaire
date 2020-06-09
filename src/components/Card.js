import React from "react";
import clsx from "clsx";
import cardStyles from "./card.module.scss";
import Symbols from "./Symbols";

const Card = ({ number, suit }) => {
  const cardClass = clsx(cardStyles.card, {
    [cardStyles[suit]]: true
  });

  return (
    <div className={cardClass}>
      <div className={clsx(cardStyles.corner, cardStyles.top)}>
        <span className={cardStyles.number}>{number}</span>
        <Symbols suit={suit} />
      </div>
      <div className={clsx(cardStyles.corner, cardStyles.bottom)}>
        <span className={cardStyles.number}>{number}</span>
        <Symbols suit={suit} />
      </div>
    </div>
  );
};

export default Card;
