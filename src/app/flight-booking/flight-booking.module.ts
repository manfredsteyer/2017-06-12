

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-search/flight-card.component';

@NgModule({
  imports: [
    SharedModule, FormsModule, CommonModule
  ],
  declarations: [
    FlightSearchComponent, FlightCardComponent
  ],
  providers: [
    // FlightService
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule {

}
