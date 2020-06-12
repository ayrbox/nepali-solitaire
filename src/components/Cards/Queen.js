import React from "react";
import CardBase from "../CardBase";

import cardsStyles from "./cards.module.scss";
import spadeFace from "./images/face-queen-spade.png";
import heartFace from "./images/face-queen-heart.png";
import diamondFace from "./images/face-queen-diamond.png";
import clubFace from "./images/face-queen-club.png";

const FACE_IMG = {
  spade: spadeFace,
  heart: heartFace,
  diamond: diamondFace,
  club: clubFace
};

const Ace = ({ suit }) => {
  const faceImg = FACE_IMG[suit];
  return (
    <CardBase suit={suit} rank="queen">
      <span>
        <img
          src={faceImg}
          className={cardsStyles.faceCard}
          alt={`Queen of ${suit}`}
        />
      </span>
    </CardBase>
  );
};

export default Ace;
