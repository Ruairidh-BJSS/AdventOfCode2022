import readFile from '../fileReader.js';

const DAY = 'day5';
const input = readFile(DAY);
const [_, inputArray] = input.split('\n\n').map(x => x.split('\n'));

const stacks = {
  1: 'FCJPHTW',
  2: 'GRVFZJBH',
  3: 'HPTR',
  4: 'ZSNPHT',
  5: 'NVFZHJCD',
  6: 'PMGFWDZ',
  7: 'MVZWSJDP',
  8: 'NDS',
  9: 'DZSFM',
};

const crateMover = (from, to, number) => {
  const stackFrom = stacks[from];
  const crates = stackFrom.slice(-number);
  stacks[from] = stackFrom.slice(0, -number);
  stacks[to] = stacks[to] + crates;
};

const getTopCrates = () =>
  Object.values(stacks)
    .map(stack => stack.slice(-1))
    .join('');

// Part 1
// ======

// const part1 = input => {
//   input.forEach(element => {
//     const [_, move, from, to] = element.match(/move (\d+) from (\d+) to (\d+)/);

//     for (let c = 0; c < move; c++) {
//       crateMover(parseInt(from), parseInt(to), 1);
//     }
//   });
//   return getTopCrates();
// };

// Part 2
// ======

const part2 = input => {
  input.forEach(element => {
    const [_, move, from, to] = element.match(/move (\d+) from (\d+) to (\d+)/);
    crateMover(parseInt(from), parseInt(to), parseInt(move));
    console.log(_, stacks);
  });
  return getTopCrates();
};

console.log(`\n${DAY}\nPart 1: \nPart 2: ${part2(inputArray)}\n`);
