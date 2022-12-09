import readFile from '../fileReader.js';

const DAY = 'day8';
const input = readFile(DAY);

const inputArray = input.split('\n');

// Part 1
// ======

const part1 = input => {
  let grid = [];
  input.forEach((element, index) => {
    grid[index] = element.split('');
  });
  let count = 0;
  for (let x = 0; x < grid[0].length; x++) {
    for (let y = 0; y < grid.length; y++) {
      if (
        x === 0 ||
        y === 0 ||
        x === grid[0].length - 1 ||
        y === grid.length - 1
      ) {
        count++;
        continue;
      }

      let tree = grid[x][y];
      let up = [];
      let down = [];
      let right = [];
      let left = [];
      for (let i = x + 1; i < grid[0].length; i++) {
        down.push(grid[i][y]);
      }
      for (let j = x - 1; j >= 0; j--) {
        up.push(grid[j][y]);
      }
      for (let i = y + 1; i < grid.length; i++) {
        right.push(grid[x][i]);
      }
      for (let j = y - 1; j >= 0; j--) {
        left.push(grid[x][j]);
      }
      if (
        !up.some(el => el >= tree) ||
        !down.some(el => el >= tree) ||
        !left.some(el => el >= tree) ||
        !right.some(el => el >= tree)
      ) {
        count++;
      }
    }
  }

  return count;
};

// Part 2
// ======

const part2 = input => {
  let grid = [];
  input.forEach((element, index) => {
    grid[index] = element.split('');
  });
  let count = 0;
  console.log(grid);
  for (let x = 0; x < grid[0].length; x++) {
    for (let y = 0; y < grid.length; y++) {
      let tree = grid[x][y];
      let up = 0;
      let down = 0;
      let right = 0;
      let left = 0;
      for (let i = x + 1; i < grid[0].length; i++) {
        if (grid[i][y] < tree) {
          down++;
        } else {
          down++;
          break;
        }
      }
      for (let j = x - 1; j >= 0; j--) {
        if (grid[j][y] < tree) {
          up++;
        } else {
          up++;
          break;
        }
      }
      for (let i = y + 1; i < grid.length; i++) {
        if (grid[x][i] < tree) {
          right++;
        } else {
          right++;
          break;
        }
      }
      for (let j = y - 1; j >= 0; j--) {
        if (grid[x][j] < tree) {
          left++;
        } else {
          left++;
          break;
        }
      }
      if (up * left * down * right > count) {
        count = up * left * down * right;
      }
    }
  }

  return count;
};

console.log(
  `\n${DAY}\nPart 1: ${part1(inputArray)}\nPart 2: ${part2(inputArray)}\n`,
);
