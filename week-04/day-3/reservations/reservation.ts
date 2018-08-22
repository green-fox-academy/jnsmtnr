import { Reservationy } from "./reservationy";

export class Reservation implements Reservationy {
  getDowBooking(): string {
    let arrayDay: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    return arrayDay[Math.floor(Math.random()*7)];
  }
  getCodeBooking(): string {
    let charSet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomstring: string = '';
    for (let i: number = 0; i < 8; i++) {
      randomstring += charSet.charAt(Math.floor(Math.random()*charSet.length));
    }
    return randomstring;
  }
  reservation(): string {
    return 'Booking# ' + this.getCodeBooking() + ' for ' + this.getDowBooking();
  }

}

let reservation: Reservation = new Reservation;

for (let i: number = 0; i < 10; i++) {
  console.log(reservation.reservation());
}