import { inject, Injectable, signal, computed } from '@angular/core';
import { Receiver } from '../models/receiver.model';
import { ReceiversService } from '../services/receivers.service';

@Injectable({ providedIn: 'root' })
export class ReceiversStore {
  private service = inject(ReceiversService);

  private _receivers = signal<Receiver[]>([]);
  private _loading = signal(false);
  private _error = signal<string | null>(null);

  readonly receivers = this._receivers.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  readonly pendingReceivers = computed(() => this._receivers().filter(r => r.status === 'pending'));

  load() {
    this._loading.set(true);
    this._error.set(null);
    this.service.getAll().subscribe({
      next: (data) => this._receivers.set(data),
      error: (err) => this._error.set(err.message),
      complete: () => this._loading.set(false)
    });
  }

  add(receiver: Partial<Receiver>) {
    this._loading.set(true);
    this.service.create(receiver).subscribe({
      next: (newReceiver) => this._receivers.update(list => [...list, newReceiver]),
      error: (err) => this._error.set(err.message),
      complete: () => this._loading.set(false)
    });
  }

  update(id: string, receiver: Partial<Receiver>) {
    this._loading.set(true);
    this.service.update(id, receiver).subscribe({
      next: (updated) => this._receivers.update(list => list.map(r => r.id === id ? updated : r)),
      error: (err) => this._error.set(err.message),
      complete: () => this._loading.set(false)
    });
  }

  remove(id: string) {
    this._loading.set(true);
    this.service.delete(id).subscribe({
      next: () => this._receivers.update(list => list.filter(r => r.id !== id)),
      error: (err) => this._error.set(err.message),
      complete: () => this._loading.set(false)
    });
  }
}