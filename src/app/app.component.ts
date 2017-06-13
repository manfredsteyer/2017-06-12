import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(router: Router) {

  }

  clickMe() {
    this.title = 'Aua!!';
    throw new Error("Test-Fehler!");
  }
}
