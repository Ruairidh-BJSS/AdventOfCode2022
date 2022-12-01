import readFile from '../fileReader.js';

const DAY = 'day1';
const input = readFile(DAY);

const inputArray = input.split('\n').map(Number);

// Part 1
// ======

const part1 = inputArray => {
  let calories = 0;
  let tempCals = 0;
  inputArray.forEach(element => {
    if (element === 0) {
      if (tempCals > calories) {
        calories = tempCals;
      }
      tempCals = 0;
    } else {
      tempCals += element;
    }
  });
  return calories;
};

// Part 2
// ======

const part2 = inputArray => {
  let calories = [];
  let tempCals = 0;
  inputArray.forEach(element => {
    if (element === 0) {
      calories.push(tempCals);
      tempCals = 0;
    } else {
      tempCals += element;
    }
  });

  calories.sort(function (a, b) {
    return b - a;
  });

  return calories[0] + calories[1] + calories[2];
};

console.log(
  `\n${DAY}\nPart 1: ${part1(inputArray)}\nPart 2: ${part2(inputArray)}\n`,
);
