import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'donors', pathMatch: 'full' },
      { 
        path: 'donors', 
        loadComponent: () => import('./features/donors/pages/donors-page/donors-page.component').then(m => m.DonorsPageComponent) 
      },
      { 
        path: 'receivers', 
        loadComponent: () => import('./features/receivers/pages/receivers-page/receivers-page.component').then(m => m.ReceiversPageComponent) 
      },
      { 
        path: 'donations', 
        loadComponent: () => import('./features/donations/pages/donations-page/donations-page.component').then(m => m.DonationsPageComponent) 
      }
    ]
  }
];