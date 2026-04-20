import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <aside class="sidebar">
      <ul>
        <li>
          <a routerLink="/donors" routerLinkActive="active">
            <span>👨‍⚕️</span> Donantes
          </a>
        </li>
        <li>
          <a routerLink="/receivers" routerLinkActive="active">
            <span>🏥</span> Receptores
          </a>
        </li>
        <li>
          <a routerLink="/donations" routerLinkActive="active">
            <span>🔄</span> Donaciones
          </a>
        </li>
      </ul>
    </aside>
  `,
  styles: [`
    .sidebar {
      width: 250px;
      background: white;
      border-right: 1px solid #e0e0e0;
      position: fixed;
      height: calc(100vh - 60px);
      overflow-y: auto;
    }
    .sidebar ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .sidebar li {
      border-bottom: 1px solid #f0f0f0;
    }
    .sidebar a {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 1.5rem;
      color: #333;
      text-decoration: none;
      transition: background 0.2s;
    }
    .sidebar a:hover {
      background: #f5f5f5;
    }
    .sidebar a.active {
      background: #ffeef0;
      color: #dc3545;
      border-left: 3px solid #dc3545;
    }
  `]
})
export class SidebarComponent {}