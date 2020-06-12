import React from "react";

import "../sass/main.scss";
import Card from "../components/Card";
import { SUITS, RANKS } from "../constants";

import shuffle from "lodash/shuffle";

const IndexPage = () => {
  const sortedDeck = RANKS.map(({ name: rank, value }) => {
    return SUITS.map(({ name: suit }) => ({
      rank,
      suit,
      value
    }));
  }).reduce((a, arr) => {
    return [...a, ...arr];
  }, []);

  const shuffledDeck = shuffle(sortedDeck);

  console.log(shuffledDeck);
  return (
    <div>
      <h1>Welcome to Nepali Solitaire</h1>
      <div style={{ fontSize: "8px" }}>
        {shuffledDeck.map(({ suit, rank }) => (
          <Card key={`${suit}-${rank}`} suit={suit} rank={rank} />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
