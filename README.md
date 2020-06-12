# Component Break down

- [x] CardBase.js~
      Current card component which takes in rank and suit to render corners.
- [x] Card-[ace,two,three....].js
      Extends and uses CardBase as Layout and renders cardBody.
- [x] Card.js
      Maps card-ace, card-two, card-three with entire deck to give you correct one.
- [ ] ~Redux store to manage state~ Use DeckProvider
- [ ] Multi dimention data to hold all cards in matrix
      A matrix of 4x3 is to be created and each node in matrix can hold multiple cards.
- [ ] Linked list, or stack can be used to model deck of card.
- [ ] Win is determine when there is no card to draw. Should have all face card on surface.
