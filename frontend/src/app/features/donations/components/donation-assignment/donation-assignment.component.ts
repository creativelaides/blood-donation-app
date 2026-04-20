import { Component, inject } from '@angular/core';
import { DonationsStore } from '../../store/donations.store';

@Component({
  selector: 'app-donation-assignment',
  standalone: true,
  template: `
    <div class="card">
      <h3>Asignar Donacion (FIFO)</h3>
      <p>Selecciona el primer donante disponible para el primer receptor pendiente.</p>
      <button (click)="store.assign()" class="btn-primary" [disabled]="store.loading()">
        Asignar Donacion
      </button>
      @if (store.lastAssignment(); as assignment) {
        <div class="result">
          <p><strong>Donante:</strong> {{ assignment.donorName }}</p>
          <p><strong>Receptor:</strong> {{ assignment.receiverName }}</p>
          <p><strong>Tipo Sangre:</strong> {{ assignment.bloodType }}</p>
        </div>
      }
    </div>
  `
})
export class DonationAssignmentComponent {
  store = inject(DonationsStore);
}