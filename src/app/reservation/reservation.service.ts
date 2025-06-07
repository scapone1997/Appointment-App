import { Injectable } from '@angular/core';
import {Reservation} from "../models/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = []

  /************** CRUD *******************/

  getReservations(): Reservation[] {
    return this.reservations
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id)
  }

  addReservation(data: Reservation) {
    this.reservations.push(data)
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id)
    this.reservations.splice(index, 1)
  }

  updateReservation(updateReservation: Reservation) {
    let index = this.reservations.findIndex(res => res.id === updateReservation.id)
    this.reservations[index] = updateReservation
  }


}
