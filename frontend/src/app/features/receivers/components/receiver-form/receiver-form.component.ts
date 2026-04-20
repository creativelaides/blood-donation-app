import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReceiversStore } from '../../store/receivers.store';

@Component({
  selector: 'app-receiver-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()" class="form-card">
      <h3>Nuevo Receptor</h3>
      <div class="form-group">
        <label>Nombre</label>
        <input [(ngModel)]="name" name="name" required />
      </div>
      <div class="form-group">
        <label>Tipo de Sangre</label>
        <select [(ngModel)]="bloodType" name="bloodType" required>
          <option value="">Seleccionar</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>
      <div class="form-group">
        <label>Edad</label>
        <input type="number" [(ngModel)]="age" name="age" required />
      </div>
      <div class="form-group">
        <label>Hospital</label>
        <input [(ngModel)]="hospital" name="hospital" required />
      </div>
      <button type="submit" class="btn-primary">Agregar Receptor</button>
    </form>
  `
})
export class ReceiverFormComponent {
  store = inject(ReceiversStore);
  name = '';
  bloodType = '';
  age = 0;
  hospital = '';

  onSubmit() {
    if (this.name && this.bloodType && this.age && this.hospital) {
      this.store.add({
        name: this.name,
        bloodType: this.bloodType,
        age: this.age,
        hospital: this.hospital,
        status: 'pending'
      });
      this.name = '';
      this.bloodType = '';
      this.age = 0;
      this.hospital = '';
    }
  }
}