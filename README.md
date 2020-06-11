# Component Break down

1. CardBase.js
   Current card component which takes in rank and suit to render corners.
2. Card-[ace,two,three....].js
   Extends and uses CardBase as Layout and renders cardBody.
3. Card.js
   Maps card-ace, card-two, card-three with entire deck to give you correct one.
