import { Component, ViewEncapsulation } from '@angular/core';
import { Flight } from '../entities/flight';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  providers: [FlightService]
  // styleUrls: ['./flight-search.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class FlightSearchComponent {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  // private http: Http;

  constructor(private flightService: FlightService) {
    // this.http = http;
    console.debug('Liebesgrüße aus dem Konstruktor');
  }

  search(): void {

      this
        .flightService
        .find(this.from, this.to)
        .subscribe(
          flights => {
            this.flights = flights;
          },
          errResponse => {
            console.error('Fehler beim Laden', errResponse);
          }
        );

  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}

