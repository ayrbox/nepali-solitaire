import React from "react";

import "../sass/main.scss";
import Card from "../components/Card";

const IndexPage = () => {
  return (
    <div>
      <h1>Welcome to Nepali Solitaire</h1>
      <Card card="A" suit="spade" />
    </div>
  );
};

export default IndexPage;
