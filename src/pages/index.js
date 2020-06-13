import React from 'react';

import '../sass/main.scss';
import Board from '../components/Board';
import DeckProvider from '../contexts/Deck';
import BoardProvider from '../contexts/BoardContext';

const IndexPage = () => {
  return (
    <BoardProvider>
      <DeckProvider>
        <div>
          <h1>Nepali Solitaire</h1>
          <Board />
        </div>
      </DeckProvider>
    </BoardProvider>
  );
};

export default IndexPage;
