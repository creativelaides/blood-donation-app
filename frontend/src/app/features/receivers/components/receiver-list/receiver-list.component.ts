import { Component, inject, OnInit } from '@angular/core';
import { ReceiversStore } from '../../store/receivers.store';
import { ReceiverFormComponent } from '../receiver-form/receiver-form.component';

@Component({
  selector: 'app-receiver-list',
  standalone: true,
  imports: [ReceiverFormComponent],
  template: `
    <div class="card">
      <app-receiver-form />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo Sangre</th>
            <th>Edad</th>
            <th>Hospital</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          @for (receiver of store.receivers(); track receiver.id) {
            <tr>
              <td>{{ receiver.name }}</td>
              <td>{{ receiver.bloodType }}</td>
              <td>{{ receiver.age }}</td>
              <td>{{ receiver.hospital }}</td>
              <td>{{ receiver.status === 'pending' ? 'Pendiente' : 'Atendido' }}</td>
              <td>
                <button (click)="store.remove(receiver.id)">Eliminar</button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `
})
export class ReceiverListComponent implements OnInit {
  store = inject(ReceiversStore);

  ngOnInit() {
    this.store.load();
  }
}