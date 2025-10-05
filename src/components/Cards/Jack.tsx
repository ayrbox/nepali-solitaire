import React from "react";
import CardBase from "../CardBase";
import { SuitName } from "../../constants";

import cardsStyles from "./cards.module.scss";
import spadeFace from "./images/face-jack-spade.png";
import heartFace from "./images/face-jack-heart.png";
import diamondFace from "./images/face-jack-diamond.png";
import clubFace from "./images/face-jack-club.png";

const FACE_IMG: Record<SuitName, string> = {
  spade: spadeFace,
  heart: heartFace,
  diamond: diamondFace,
  club: clubFace
};

interface JackProps {
  suit: SuitName;
  selected: boolean;
}

const Jack: React.FC<JackProps> = ({ suit, selected }) => {
  const faceImg = FACE_IMG[suit];
  return (
    <CardBase suit={suit} rank="jack" selected={selected}>
      <span>
        <img
          src={faceImg}
          className={cardsStyles.faceCard}
          alt={`Jack of ${suit}`}
        />
      </span>
    </CardBase>
  );
};

export default Jack;
