import { inject, Injectable, signal, computed } from '@angular/core';
import { Donation } from '../models/donation.model';
import { DonationsService } from '../services/donations.service';

@Injectable({ providedIn: 'root' })
export class DonationsStore {
  private service = inject(DonationsService);

  private _donations = signal<Donation[]>([]);
  private _loading = signal(false);
  private _error = signal<string | null>(null);
  private _lastAssignment = signal<Donation | null>(null);

  readonly donations = this._donations.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();
  readonly lastAssignment = this._lastAssignment.asReadonly();

  readonly completedDonations = computed(() => this._donations().filter(d => d.status === 'completed'));

  load() {
    this._loading.set(true);
    this._error.set(null);
    this.service.getAll().subscribe({
      next: (data) => this._donations.set(data),
      error: (err) => this._error.set(err.message),
      complete: () => this._loading.set(false)
    });
  }

  assign() {
    this._loading.set(true);
    this._error.set(null);
    this.service.assign().subscribe({
      next: (donation) => {
        this._donations.update(list => [...list, donation]);
        this._lastAssignment.set(donation);
      },
      error: (err) => this._error.set(err.message),
      complete: () => this._loading.set(false)
    });
  }
}