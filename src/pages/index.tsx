import React from 'react';

import '../sass/main.scss';
import Board from '../components/Board';
import DeckProvider from '../contexts/Deck';
import BoardProvider from '../contexts/BoardContext';

const IndexPage: React.FC = () => {
  return (
    <BoardProvider>
      <DeckProvider>
        <Board />
      </DeckProvider>
    </BoardProvider>
  );
};

export default IndexPage;