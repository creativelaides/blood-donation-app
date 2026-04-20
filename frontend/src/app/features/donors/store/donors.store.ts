import { inject, Injectable, signal, computed } from '@angular/core';
import { Donor } from '../models/donor.model';
import { DonorsService } from '../services/donors.service';

@Injectable({ providedIn: 'root' })
export class DonorsStore {
  private service = inject(DonorsService);

  private _donors = signal<Donor[]>([]);
  private _loading = signal(false);
  private _error = signal<string | null>(null);

  readonly donors = this._donors.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  readonly availableDonors = computed(() => this._donors().filter(d => d.available));

  load() {
    this._loading.set(true);
    this._error.set(null);
    this.service.getAll().subscribe({
      next: (data) => this._donors.set(data),
      error: (err) => this._error.set(err.message),
      complete: () => this._loading.set(false)
    });
  }

  add(donor: Partial<Donor>) {
    this._loading.set(true);
    this.service.create(donor).subscribe({
      next: (newDonor) => this._donors.update(list => [...list, newDonor]),
      error: (err) => this._error.set(err.message),
      complete: () => this._loading.set(false)
    });
  }

  update(id: string, donor: Partial<Donor>) {
    this._loading.set(true);
    this.service.update(id, donor).subscribe({
      next: (updated) => this._donors.update(list => list.map(d => d.id === id ? updated : d)),
      error: (err) => this._error.set(err.message),
      complete: () => this._loading.set(false)
    });
  }

  remove(id: string) {
    this._loading.set(true);
    this.service.delete(id).subscribe({
      next: () => this._donors.update(list => list.filter(d => d.id !== id)),
      error: (err) => this._error.set(err.message),
      complete: () => this._loading.set(false)
    });
  }
}