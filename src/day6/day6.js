import readFile from '../fileReader.js';

const DAY = 'day6';
const input = readFile(DAY);

// Part 1
// ======

const part1 = input => {
  const array = input.split('');
  for (let i = 0; i < array.length; i++) {
    let tmp = [array[i], array[i + 1], array[i + 2], array[i + 3]];
    if (!tmp.some((v, i) => tmp.indexOf(v) < i)) {
      return i + 4;
    }
  }
  return 0;
};

// Part 2
// ======

const part2 = input => {
  const array = input.split('');
  for (let i = 0; i < array.length; i++) {
    let tmp = [
      array[i],
      array[i + 1],
      array[i + 2],
      array[i + 3],
      array[i + 4],
      array[i + 5],
      array[i + 6],
      array[i + 7],
      array[i + 8],
      array[i + 9],
      array[i + 10],
      array[i + 11],
      array[i + 12],
      array[i + 13],
    ];
    if (!tmp.some((v, i) => tmp.indexOf(v) < i)) {
      return i + 14;
    }
  }
  return 0;
};

console.log(`\n${DAY}\nPart 1: ${part1(input)}\nPart 2: ${part2(input)}\n`);
