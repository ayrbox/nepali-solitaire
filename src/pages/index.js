import React from "react";

import "../sass/main.scss";
import Board from "../components/Board";
import DeckProvider from "../contexts/Deck";

const IndexPage = () => {
  return (
    <DeckProvider>
      <div>
        <h1>Welcome to Nepali Solitaire</h1>
        <Board />
      </div>
    </DeckProvider>
  );
};

export default IndexPage;
