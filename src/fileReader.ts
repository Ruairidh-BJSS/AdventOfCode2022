import fs from 'fs';

export default function readFile(day) {
  let input = fs.readFileSync(`src/${day}/input.txt`, 'utf-8').toString();

  let numbers = input
    .split(/[^\d.]+/)
    .filter(t => t !== '')
    .map(Number);

  return numbers;
}
