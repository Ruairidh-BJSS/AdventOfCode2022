import readFile from '../fileReader.js';

const DAY = 'day7';
const input = readFile(DAY);
const inputArray = input.split('\n');

// Part 1
// ======

const part1 = input => {
  let sum = 0;
  let directory = [];
  input.forEach(element => {
    if (element[0] == '$') {
      if (element[2] == 'c') {
        if (element[5] == '.') {
          if (directory[directory.length - 1] <= 100000) {
            sum += directory[directory.length - 1];
          }
          directory[directory.length - 2] += directory.pop();
        } else {
          directory.push(0);
        }
      }
    } else {
      directory[directory.length - 1] += parseInt(element) || 0;
    }
  });
  return sum;
};

// Part 2
// ======

const part2 = input => {
  let sum = [];
  let directory = [];
  input.forEach(element => {
    if (element[0] == '$') {
      if (element[2] == 'c') {
        if (element[5] == '.') {
          if (directory[directory.length - 1]) {
            sum.push(directory[directory.length - 1]);
          }
          directory[directory.length - 2] += directory.pop();
        } else {
          directory.push(0);
        }
      }
    } else {
      directory[directory.length - 1] += parseInt(element) || 0;
    }
  });

  console.log(sum);
  return Math.min(
    ...sum.filter(x => x >= 30000000 - (70000000 - directory.size)),
  );
};

console.log(
  `\n${DAY}\nPart 1: ${part1(inputArray)}\nPart 2: ${part2(inputArray)}\n`,
);
