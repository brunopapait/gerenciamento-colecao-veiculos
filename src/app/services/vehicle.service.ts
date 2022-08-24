import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../model/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  URI = 'http://localhost:3000/vehicles';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) { }

  async save(vehicle: Vehicle) {
    return this.httpClient.post(this.URI, JSON.stringify(vehicle), this.httpOptions).toPromise()
    .then(response => response as Vehicle)
    .catch(() => {
      throw new Error('Erro ao salvar o veículo !');
    });
  }

  async findAll() {
    return this.httpClient.get(this.URI).toPromise()
    .then(response => response as Vehicle[])
    .catch(() => {
      throw new Error('Erro ao buscar o veículo !');
    });
  }
}
