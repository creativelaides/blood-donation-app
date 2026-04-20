import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receiver } from '../models/receiver.model';

@Injectable({ providedIn: 'root' })
export class ReceiversService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:5000/api/receivers';

  getAll() {
    return this.http.get<Receiver[]>(this.baseUrl);
  }

  getById(id: string) {
    return this.http.get<Receiver>(`${this.baseUrl}/${id}`);
  }

  create(receiver: Partial<Receiver>) {
    return this.http.post<Receiver>(this.baseUrl, receiver);
  }

  update(id: string, receiver: Partial<Receiver>) {
    return this.http.put<Receiver>(`${this.baseUrl}/${id}`, receiver);
  }

  delete(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}