import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navbarOpen = false;

  constructor(private router: Router) { }

  closeMenu(): void {
    this.navbarOpen = false;
  }

  navigate(route: string): void {
    this.closeMenu();
    this.router.navigate([route]);
  }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

}
