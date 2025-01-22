// Moive prices for movies.data* format

const prices = [5, 5.25, 5.5, 5.75, 5.99, 6, 6.25, 6.5, 6.75, 6.99];

const getNumericPrice = (id) => {
  const voteINT = Number(id).toPrecision(1);
  return prices[voteINT] || 0;
};
export const createMoviePrice = (id) => `${getNumericPrice(id).toFixed(2)}$`;
