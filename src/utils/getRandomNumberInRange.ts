/**
 * Helper function for generating random number from given range
 * @param min
 * @param max
 */
const getRandomNumberInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandomNumberInRange;
