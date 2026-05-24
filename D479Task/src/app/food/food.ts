import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food',
  imports: [RouterLink, CommonModule],
  templateUrl: './food.html',
  styleUrl: './food.css',
})
export class Food {
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
authenticCards = [
  { id: 'a1', title: 'Restaurant 1', back: 'Info 1', flipped: false },
  { id: 'a2', title: 'Restaurant 2', back: 'Info 2', flipped: false },
  { id: 'a3', title: 'Restaurant 3', back: 'Info 3', flipped: false },
];

familyCards = [
  { id: 'f1', title: 'Restaurant 4', back: 'Info 4', flipped: false },
  { id: 'f2', title: 'Restaurant 5', back: 'Info 5', flipped: false },
  { id: 'f3', title: 'Restaurant 6', back: 'Info 6', flipped: false },
];

couplesCards = [
  { id: 'c1', title: 'Restaurant 7', back: 'Info 7', flipped: false },
  { id: 'c2', title: 'Restaurant 8', back: 'Info 8', flipped: false },
  { id: 'c3', title: 'Restaurant 9', back: 'Info 9', flipped: false },
];

trackById(index: number, card: any) {
  return card.id;
}

toggle(group: any[], index: number) {
  const wasFlipped = group[index].flipped;
  [...this.authenticCards, ...this.familyCards, ...this.couplesCards].forEach(c => c.flipped = false);
  group[index].flipped = !wasFlipped;
}

}
