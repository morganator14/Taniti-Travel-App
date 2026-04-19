import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-lodging',
  imports: [RouterLink],
  templateUrl: './lodging.html',
  styleUrl: './lodging.css',
})
export class Lodging {
    constructor(private router: Router) {}

  goToPage(route:string) {
    this.router.navigate([route])
  }
    @HostListener('window:scroll', [])
  onScroll(): void {
  const scrollY = window.scrollY;
  const fadeStart = 0;
  const fadeEnd = 200;

  const opacity = 1 - Math.min(scrollY / (fadeEnd - fadeStart), 1);

  const fixedTop = document.querySelector('.fixed-top') as HTMLElement;
  if (fixedTop) {
    fixedTop.style.opacity = String(opacity);
    fixedTop.style.pointerEvents = opacity === 0 ? 'none' : 'auto';
  }
}
}
