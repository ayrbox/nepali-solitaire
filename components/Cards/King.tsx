import React from "react";
import { StaticImageData } from "next/image";
import CardBase from "../CardBase";
import { SuitName } from "../../lib/constants";

import cardsStyles from "./cards.module.scss";
import spadeFace from "./images/face-king-spade.png";
import heartFace from "./images/face-king-heart.png";
import diamondFace from "./images/face-king-diamond.png";
import clubFace from "./images/face-king-club.png";

const FACE_IMG: Record<SuitName, StaticImageData> = {
  spade: spadeFace,
  heart: heartFace,
  diamond: diamondFace,
  club: clubFace
};

interface KingProps {
  suit: SuitName;
  selected: boolean;
}

const King: React.FC<KingProps> = ({ suit, selected }) => {
  const faceImg = FACE_IMG[suit];
  return (
    <CardBase suit={suit} rank="king" selected={selected}>
      <span>
        <img
          src={faceImg.src}
          className={cardsStyles.faceCard}
          alt={`King of ${suit}`}
        />
      </span>
    </CardBase>
  );
};

export default King;
