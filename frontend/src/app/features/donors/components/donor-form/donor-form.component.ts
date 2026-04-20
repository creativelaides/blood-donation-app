import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DonorsStore } from '../../store/donors.store';

@Component({
  selector: 'app-donor-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()" class="form-card">
      <h3>Nuevo Donante</h3>
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
        <label>Email</label>
        <input type="email" [(ngModel)]="email" name="email" required />
      </div>
      <button type="submit" class="btn-primary">Agregar Donante</button>
    </form>
  `
})
export class DonorFormComponent {
  store = inject(DonorsStore);
  name = '';
  bloodType = '';
  age = 0;
  email = '';

  onSubmit() {
    if (this.name && this.bloodType && this.age && this.email) {
      this.store.add({
        name: this.name,
        bloodType: this.bloodType,
        age: this.age,
        email: this.email,
        available: true
      });
      this.name = '';
      this.bloodType = '';
      this.age = 0;
      this.email = '';
    }
  }
}