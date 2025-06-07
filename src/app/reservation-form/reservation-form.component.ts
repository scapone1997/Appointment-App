import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder) {

  }

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
      console.log("valid")
    }

  }

}
