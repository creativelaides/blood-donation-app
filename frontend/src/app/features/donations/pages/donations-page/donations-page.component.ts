import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DonationsStore } from '../../store/donations.store';
import { DonationAssignmentComponent } from '../../components/donation-assignment/donation-assignment.component';
import { DonationHistoryComponent } from '../../components/donation-history/donation-history.component';

@Component({
  selector: 'app-donations-page',
  standalone: true,
  imports: [FormsModule, DonationAssignmentComponent, DonationHistoryComponent],
  template: `
    <div class="page-header">
      <h1 class="page-title">Donaciones</h1>
    </div>
    <app-donation-assignment />
    <app-donation-history />
  `
})
export class DonationsPageComponent {
  store = inject(DonationsStore);
}