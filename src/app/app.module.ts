import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from "./home/home.module";
import {ReservationModule} from "./reservation/reservation.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeModule,
    ReservationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
