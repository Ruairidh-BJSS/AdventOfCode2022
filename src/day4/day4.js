import readFile from '../fileReader.js';

const DAY = 'day4';
const input = readFile(DAY);

const inputArray = input.split('\n');

// Part 1
// ======

const part1 = input => {
  let count = 0;
  input.forEach(element => {
    let sections = element.split(',');
    let elf1 = sections[0].split('-').map(Number);
    let elf2 = sections[1].split('-').map(Number);
    if (
      (elf1[0] <= elf2[0] && elf2[1] <= elf1[1]) ||
      (elf2[0] <= elf1[0] && elf1[1] <= elf2[1])
    ) {
      count++;
    }
  });
  return count;
};

// Part 2
// ======

const part2 = input => {
  let count = 0;
  input.forEach(element => {
    let sections = element.split(',');
    let elf1 = sections[0].split('-').map(Number);
    let elf2 = sections[1].split('-').map(Number);
    if (
      (elf1[0] < elf2[0] && elf1[1] < elf2[0]) ||
      (elf1[0] > elf2[1] && elf1[1] > elf2[1])
    ) {
      count++;
    }
  });
  return 1000 - count;
};

console.log(
  `\n${DAY}\nPart 1: ${part1(inputArray)}\nPart 2: ${part2(inputArray)}\n`,
);
