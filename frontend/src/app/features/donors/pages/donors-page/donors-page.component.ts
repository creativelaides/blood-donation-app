import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DonorsStore } from '../../store/donors.store';
import { DonorListComponent } from '../../components/donor-list/donor-list.component';

@Component({
  selector: 'app-donors-page',
  standalone: true,
  imports: [FormsModule, DonorListComponent],
  template: `
    <div class="page-header">
      <h1 class="page-title">Donantes</h1>
    </div>
    <app-donor-list />
  `
})
export class DonorsPageComponent {
  store = inject(DonorsStore);
}