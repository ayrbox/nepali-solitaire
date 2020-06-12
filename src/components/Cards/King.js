import React from "react";
import clsx from "clsx";
import CardBase from "../CardBase";

import cardsStyles from "./cards.module.scss";
import { SUIT } from "../../constants";
import spadeFace from "./images/face-king-spade.png";
import heartFace from "./images/face-king-heart.png";
import diamondFace from "./images/face-king-diamond.png";
import clubFace from "./images/face-king-club.png";

const FACE_IMG = {
  spade: spadeFace,
  heart: heartFace,
  diamond: diamondFace,
  club: clubFace
};

const Ace = ({ suit }) => {
  const { symbol } = SUIT[suit];
  const faceImg = FACE_IMG[suit];
  return (
    <CardBase suit={suit} rank="king">
      <span>
        <img src={faceImg} className={cardsStyles.faceCard} />
      </span>
    </CardBase>
  );
};

export default Ace;
