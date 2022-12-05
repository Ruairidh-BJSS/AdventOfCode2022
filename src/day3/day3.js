import readFile from '../fileReader.js';

const DAY = 'day3';
const input = readFile(DAY);

const inputArray = input.split('\n');
// Part 1
// ======

const part1 = input => {
  let sum = 0;
  input.forEach(element => {
    let half = Math.floor(element.length / 2);
    let rucksack1 = element.slice(0, half).split('');
    let rucksack2 = element.slice(half, element.length).split('');
    let letter = rucksack1.filter(value => rucksack2.includes(value))[0];
    let letterValue = letter.charCodeAt(0);

    letterValue += letter === letter.toUpperCase() ? -38 : -96;
    sum += letterValue;
  });

  return sum;
};

// Part 2
// ======

const part2 = input => {
  let sum = 0;
  for (let i = 0; i < 300; i += 3) {
    console.log(i);
    let letter = input[i]
      .split('')
      .filter(
        value =>
          input[i + 1].split('').includes(value) &&
          input[i + 2].split('').includes(value),
      )[0];

    let letterValue = letter.charCodeAt(0);
    letterValue += letter === letter.toUpperCase() ? -38 : -96;

    console.log(letter, letterValue);

    sum += letterValue;
  }

  return sum;
};

console.log(
  `\n${DAY}\nPart 1: ${part1(inputArray)}\nPart 2: ${part2(inputArray)}\n`,
);
