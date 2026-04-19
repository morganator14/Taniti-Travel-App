import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('D479Task');

      constructor(private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                document.body.classList.add('fade-out');
            }
            if (event instanceof NavigationEnd) {
                setTimeout(() => {
                    document.body.classList.remove('fade-out');
                }, 300);
            }
        });
    }
}