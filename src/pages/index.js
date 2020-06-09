import React from "react";

import "../sass/main.scss";
import Card from "../components/Card";

import { SUITS, RANKS } from "../constants";

const IndexPage = () => {
  return (
    <div>
      <h1>Welcome to Nepali Solitaire</h1>
      <div style={{ fontSize: "12px" }}>
        {SUITS.map(({ name: suit }) => (
          <div key={suit}>
            {RANKS.map(({ name: rank }) => (
              <Card key={rank} suit={suit} rank={rank} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
