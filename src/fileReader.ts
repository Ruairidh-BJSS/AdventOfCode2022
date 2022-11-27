import fs from 'fs';

export default function readFile(day: string): number[] {
  let input: string = fs
    .readFileSync(`src/${day}/input.txt`, 'utf-8')
    .toString();

  let numbers: number[] = input
    .split(/[^\d.]+/)
    .filter(t => t !== '')
    .map(Number);

  return numbers;
}
