import { Component, inject, OnInit } from '@angular/core';
import { DonorsStore } from '../../store/donors.store';
import { DonorFormComponent } from '../donor-form/donor-form.component';

@Component({
  selector: 'app-donor-list',
  standalone: true,
  imports: [DonorFormComponent],
  template: `
    <div class="card">
      <app-donor-form />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo Sangre</th>
            <th>Edad</th>
            <th>Disponible</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          @for (donor of store.donors(); track donor.id) {
            <tr>
              <td>{{ donor.name }}</td>
              <td>{{ donor.bloodType }}</td>
              <td>{{ donor.age }}</td>
              <td>{{ donor.available ? 'Sí' : 'No' }}</td>
              <td>
                <button (click)="store.remove(donor.id)">Eliminar</button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `
})
export class DonorListComponent implements OnInit {
  store = inject(DonorsStore);

  ngOnInit() {
    this.store.load();
  }
}