import fs from 'fs';

export default function readFile(day) {
  return fs.readFileSync(`src/${day}/input.txt`, 'utf-8').toString();
}
