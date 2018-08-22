import { Reservationy } from "./reservationy";

export class Reservation implements Reservationy {
  getDowBooking(): string {
    throw new Error("Method not implemented.");
  }
  getCodeBooking(): string {
    throw new Error("Method not implemented.");
  }
  reservation(): string {
    return 'Booking# ' + 'for '
  }

}

let reservation: Reservation = new Reservation;

for (let i: number = 0; i < 10; i++) {
  console.log(reservation.reservation());
}