import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gasto } from '../interfaces/gasto.interface';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  private apiUrl = 'http://localhost:5000/gastos';

  constructor(private http: HttpClient) {}

  getGastos(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(this.apiUrl);
  }

  addGasto(gasto: Omit<Gasto, 'id'>): Observable<Gasto> {
    return this.http.post<Gasto>(this.apiUrl, gasto);
  }

  deleteGasto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
