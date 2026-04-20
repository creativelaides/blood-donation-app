import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donor } from '../models/donor.model';

@Injectable({ providedIn: 'root' })
export class DonorsService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:5000/api/donors';

  getAll() {
    return this.http.get<Donor[]>(this.baseUrl);
  }

  getById(id: string) {
    return this.http.get<Donor>(`${this.baseUrl}/${id}`);
  }

  create(donor: Partial<Donor>) {
    return this.http.post<Donor>(this.baseUrl, donor);
  }

  update(id: string, donor: Partial<Donor>) {
    return this.http.put<Donor>(`${this.baseUrl}/${id}`, donor);
  }

  delete(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}