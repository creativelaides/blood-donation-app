import { Component, inject, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DonationsStore } from '../../store/donations.store';

@Component({
  selector: 'app-donation-history',
  standalone: true,
  imports: [DatePipe],
  template: `
    <div class="card">
      <h3>Historial de Donaciones</h3>
      <table>
        <thead>
          <tr>
            <th>Donante</th>
            <th>Receptor</th>
            <th>Tipo Sangre</th>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          @for (donation of store.donations(); track donation.id) {
            <tr>
              <td>{{ donation.donorName }}</td>
              <td>{{ donation.receiverName }}</td>
              <td>{{ donation.bloodType }}</td>
              <td>{{ donation.date | date:'short' }}</td>
              <td>{{ donation.status === 'completed' ? 'Completada' : 'Cancelada' }}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `
})
export class DonationHistoryComponent implements OnInit {
  store = inject(DonationsStore);

  ngOnInit() {
    this.store.load();
  }
}