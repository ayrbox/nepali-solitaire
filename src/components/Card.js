import React from "react";
import clsx from "clsx";
import cardStyles from "./card.module.scss";

const Card = ({ card, suit }) => {
  const cardClass = clsx(cardStyles.card, {
    [cardStyles[suit]]: true
  });

  return (
    <div className={cardClass}>
      <h1>{card}</h1>
      <p> {suit}</p>
    </div>
  );
};

export default Card;
