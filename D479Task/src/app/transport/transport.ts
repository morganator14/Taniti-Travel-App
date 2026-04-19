import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transport',
  imports: [],
  templateUrl: './transport.html',
  styleUrl: './transport.css',
})
export class Transport {
    constructor(private router: Router) {}

  goToPage(route:string) {
    this.router.navigate([route])
  }
}
