import React, { Fragment } from "react";

import "../sass/main.scss";
import Card from "../components/Card";
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
