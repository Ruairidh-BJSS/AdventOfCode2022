import readFile from '../fileReader.js';

const DAY = 'day2';
const input = readFile(DAY);

const inputArray = input.split('\n');

// Part 1
// ======

const part1 = inputArray => {
  let score = 0;
  inputArray.forEach(element => {
    let game = element.split(' ');
    score +=
      game[0] === 'A' && game[1] === 'X'
        ? 4
        : game[0] === 'A' && game[1] === 'Y'
        ? 8
        : game[0] === 'A' && game[1] === 'Z'
        ? 3
        : game[0] === 'B' && game[1] === 'X'
        ? 1
        : game[0] === 'B' && game[1] === 'Y'
        ? 5
        : game[0] === 'B' && game[1] === 'Z'
        ? 9
        : game[0] === 'C' && game[1] === 'X'
        ? 7
        : game[0] === 'C' && game[1] === 'Y'
        ? 2
        : game[0] === 'C' && game[1] === 'Z'
        ? 6
        : 0;
  });
  return score;
};

// Part 2
// ======

const part2 = inputArray => {
  let score = 0;
  inputArray.forEach(element => {
    let game = element.split(' ');
    score +=
      game[0] === 'A' && game[1] === 'X'
        ? 3
        : game[0] === 'A' && game[1] === 'Y'
        ? 4
        : game[0] === 'A' && game[1] === 'Z'
        ? 8
        : game[0] === 'B' && game[1] === 'X'
        ? 1
        : game[0] === 'B' && game[1] === 'Y'
        ? 5
        : game[0] === 'B' && game[1] === 'Z'
        ? 9
        : game[0] === 'C' && game[1] === 'X'
        ? 2
        : game[0] === 'C' && game[1] === 'Y'
        ? 6
        : game[0] === 'C' && game[1] === 'Z'
        ? 7
        : 0;
  });
  return score;
};

console.log(
  `\n${DAY}\nPart 1: ${part1(inputArray)}\nPart 2: ${part2(inputArray)}\n`,
);
