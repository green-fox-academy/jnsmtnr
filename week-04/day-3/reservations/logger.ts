import { Reservation } from "./reservation";

declare function require(path: string): any;
const fs = require('fs');

let reservation: Reservation = new Reservation;

fs.writeFileSync('log.txt', '');
for (let i: number = 0; i < 100; i++) {
  fs.appendFileSync('log.txt',reservation.reservation() + '\r\n');
}