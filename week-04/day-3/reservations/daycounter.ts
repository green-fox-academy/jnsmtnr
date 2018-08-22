export {};

declare function require(path: string): any;
const fs = require('fs');

function logReader (filename: string): string {
  let log: string = fs.readFileSync (filename, 'utf-8');
  return log;
}

function lineSplitter (data: string): string[] {
  let log: string[] = data.split('\r\n');
  return log;
}