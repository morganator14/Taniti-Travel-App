import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lodging',
  imports: [],
  templateUrl: './lodging.html',
  styleUrl: './lodging.css',
})
export class Lodging {
    constructor(private router: Router) {}

  goToPage(route:string) {
    this.router.navigate([route])
  }
}
