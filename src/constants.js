export const SUIT = {
  club: {
    name: "club",
    symbol: "&clubs;",
    color: "#000"
  },
  diamond: {
    name: "diamond",
    symbol: "&diams;",
    color: "#df0000"
  },
  spade: {
    name: "spade",
    symbol: "&spades;",
    color: "#000"
  },
  heart: {
    name: "heart",
    symbol: "&hearts;",
    color: "#df0000"
  }
};

export const SUITS = [SUIT.club, SUIT.diamond, SUIT.spade, SUIT.heart];

export const RANK = {
  ace: {
    name: "ace",
    symbol: "A",
    value: 1
  },
  two: {
    name: "two",
    symbol: "2",
    value: 2
  },
  three: {
    name: "three",
    symbol: "3",
    value: 3
  },
  four: {
    name: "four",
    symbol: "4",
    value: 4
  },
  five: {
    name: "five",
    symbol: "5",
    value: 5
  },
  six: {
    name: "six",
    symbol: "6",
    value: 6
  },
  seven: {
    name: "seven",
    symbol: "7",
    value: 7
  },
  eight: {
    name: "eight",
    symbol: "8",
    value: 8
  },
  nine: {
    name: "nine",
    symbol: "9",
    value: 9
  },
  ten: {
    name: "ten",
    symbol: "10",
    value: 10
  },
  jack: {
    name: "jack",
    symbol: "J",
    value: -1
  },
  queen: {
    name: "queen",
    symbol: "Q",
    value: -1
  },
  king: {
    name: "king",
    symbol: "K",
    value: -1
  }
};

export const RANKS = [
  RANK.ace,
  RANK.two,
  RANK.three,
  RANK.four,
  RANK.five,
  RANK.six,
  RANK.seven,
  RANK.eight,
  RANK.nine,
  RANK.ten,
  RANK.jack,
  RANK.queen,
  RANK.king
];
