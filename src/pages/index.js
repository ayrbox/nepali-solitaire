import React from "react";

import "../sass/main.scss";
import Card from "../components/Card";

const cardNumbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const cardSuits = ["spade", "heart", "club", "diamond"];

const IndexPage = () => {
  return (
    <div>
      <h1>Welcome to Nepali Solitaire</h1>
      <div style={{ fontSize: "12px" }}>
        {cardSuits.map(suit => (
          <div key={suit}>
            {cardNumbers.map(num => (
              <Card key={num} suit={suit} number={num} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
