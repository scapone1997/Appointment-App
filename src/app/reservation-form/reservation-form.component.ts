import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReservationService} from "../reservation/reservation.service";
import {Reservation} from "../models/reservation";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({})

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      dataCheckIn: ['', Validators.required],
      dataCheckOut: ['', Validators.required],
      nomeOspite: ['', Validators.required],
      emailOspite: ['', [Validators.required, Validators.email]],
      numeroStanza: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.reservationForm.valid){
      let reservation: Reservation = this.reservationForm.value
      this.reservationService.addReservation(reservation)
    }
  }

}
