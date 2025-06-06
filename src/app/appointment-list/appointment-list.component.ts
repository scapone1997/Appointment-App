import { Component } from '@angular/core';
import {Appointment} from "../models/appointment";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {

  newAppointmentTile : string = "";
  newAppointmentDate : Date = new Date();

  appointments: Appointment[] = []

  addAppointment(){
    if(this.newAppointmentTile.trim().length > 0 && this.newAppointmentDate){
      let newAppointment: Appointment = {
          id: Date.now(),
          title: this.newAppointmentTile,
          date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment);

      this.newAppointmentTile = "";
      this.newAppointmentDate = new Date();
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
  }

}
