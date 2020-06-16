export const BOARD_SIZE = 12;

export const generateBoard = () => {
  return new Array(BOARD_SIZE).fill(0).reduce(
    (_, __, idx) => ({
      ..._,
      ...{
        [`00${idx}`]: {
          cards: [],
        },
      },
    }),
    {}
  );
};
