import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-activities',
  imports: [RouterLink],
  templateUrl: './activities.html',
  styleUrl: './activities.css',
})
export class Activities {
    constructor(private router: Router) {}

  goToPage(route:string) {
    this.router.navigate([route])
  }
}
