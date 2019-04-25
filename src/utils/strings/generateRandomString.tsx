const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const generateRandomString = (length: number): string =>
  [...Array(length)]
    .map((): string => letters[Math.floor(Math.random() * letters.length)])
    .join('');

export default generateRandomString;
