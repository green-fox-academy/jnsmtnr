export {};

declare function require(path: string): any;
const fs = require('fs');

function logReader (filename: string): string {
  let log: string = fs.readFileSync (filename, 'utf-8');
  return log;
}

function logSplitter(data: string): string[][] {
  let splittedArray: string[][] = [];
  let lines: string[] = data.split('\r\n');
  lines.forEach(function(line) {
    splittedArray.push(line.split(' '));
  });
  return splittedArray
}

function dayCounter(data: string[][]): void {
  let mondays: number = 0;
  let tuesdays: number = 0;
  let wednesdays: number = 0;
  let thursdays: number = 0;
  let fridays: number = 0;
  let saturdays: number = 0;
  let sundays: number = 0;
  data.forEach(function(line) {
    if (line[3] == 'MON') {
      mondays++;
    } else if (line[3] == 'TUE') {
      tuesdays++;
    } else if (line[3] == 'WED') {
      wednesdays++;
    } else if (line[3] == 'THU') {
      thursdays++;
    } else if (line[3] == 'FRI') {
      fridays++;
    } else if (line[3] == 'SAT') {
      saturdays++;
    } else if (line[3] == 'SUN') {
      sundays++;
    } 
  });
  let mondaysPerc: string = String(Math.round((mondays/data.length*1000))/10) + '%';
  let tuesdaysPerc: string = String(Math.round((tuesdays/data.length*1000))/10) + '%';
  let wednesdaysPerc: string = String(Math.round((wednesdays/data.length*1000))/10) + '%';
  let thursdaysPerc: string = String(Math.round((thursdays/data.length*1000))/10) + '%';
  let fridaysPerc: string = String(Math.round((fridays/data.length*1000))/10) + '%';
  let saturdaysPerc: string = String(Math.round((saturdays/data.length*1000))/10) + '%';
  let sundaysPerc: string = String(Math.round((sundays/data.length*1000))/10) + '%';
  console.log('MON: ' + mondaysPerc + ' TUE: ' + tuesdaysPerc + ' WED: ' + wednesdaysPerc + ' THU: ' + thursdaysPerc + ' FRI: ' + fridaysPerc + ' SAT: ' + saturdaysPerc + ' SUN: ' + sundaysPerc)
}

dayCounter((logSplitter(logReader('log.txt'))));