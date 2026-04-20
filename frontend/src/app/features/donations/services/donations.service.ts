import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donation } from '../models/donation.model';

@Injectable({ providedIn: 'root' })
export class DonationsService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:5000/api/donations';

  getAll() {
    return this.http.get<Donation[]>(this.baseUrl);
  }

  assign() {
    return this.http.post<Donation>(this.baseUrl, {});
  }

  cancel(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}