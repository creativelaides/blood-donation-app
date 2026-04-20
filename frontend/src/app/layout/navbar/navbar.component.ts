import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar">
      <div class="logo">
        <span class="icon">🩸</span>
        <span class="title">Blood Donation</span>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: #dc3545;
      color: white;
      padding: 1rem 1.5rem;
      display: flex;
      align-items: center;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.25rem;
      font-weight: 600;
    }
    .icon {
      font-size: 1.5rem;
    }
  `]
})
export class NavbarComponent {}