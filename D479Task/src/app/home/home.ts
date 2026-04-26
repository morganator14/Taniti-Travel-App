import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.onScroll();
  }
  
  goToPage(route:string) {
    this.router.navigate([route])
  }

    @HostListener('window:scroll', [])
  onScroll(): void {
  const scrollY = window.scrollY;
  const fadeStart = 0;
  const fadeEnd = 150;

  const opacity = 1 - Math.min(scrollY / (fadeEnd - fadeStart), 1);

  const fixedTop = document.querySelector('.fixed-top') as HTMLElement;
  if (fixedTop) {
    fixedTop.style.opacity = String(opacity);
    fixedTop.style.pointerEvents = opacity === 0 ? 'none' : 'auto';
  }
}
}


