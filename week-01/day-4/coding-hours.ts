'use strict';

let dailyCodingHours: number = 6;
let semesterLength: number = 17;
let workDaysPerWeek: number = 5;

console.log (dailyCodingHours * semesterLength * workDaysPerWeek);

let averageWorkHoursPerWeek: number = 52;

console.log (dailyCodingHours * workDaysPerWeek / averageWorkHoursPerWeek * 100 + "%");

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52