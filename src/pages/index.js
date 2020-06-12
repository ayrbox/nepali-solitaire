import React, { Fragment } from "react";

import "../sass/main.scss";
import Card from "../components/CardBase";
import {
  Ace,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King
} from "../components/Cards";

import { SUITS, RANKS } from "../constants";

const IndexPage = () => {
  return (
    <div>
      <h1>Welcome to Nepali Solitaire</h1>
      <div
        style={{
          fontSize: "12px",
          minHeight: "500px"
        }}
      >
        {SUITS.map(({ name: suit }) => (
          <Fragment key={suit}>
            <Ace suit={suit} />
            <Two suit={suit} />
            <Three suit={suit} />
            <Four suit={suit} />
            <Five suit={suit} />
            <Six suit={suit} />
            <Seven suit={suit} />
            <Eight suit={suit} />
            <Nine suit={suit} />
            <Ten suit={suit} />
            <Jack suit={suit} />
            <Queen suit={suit} />
            <King suit={suit} />
            {RANKS.map(({ name: rank }) => (
              <Card key={rank} suit={suit} rank={rank}>
                {rank}
              </Card>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
