import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
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

  async update(vehicle: Vehicle) {
    return this.httpClient.put(`${this.URI}/${vehicle.id}`, JSON.stringify(vehicle), this.httpOptions).toPromise()
    .then(response => response as Vehicle)
    .catch(() => {
      throw new Error('Erro ao atualizar o veículo !');
    });
  }

  async findAll() {
    return this.httpClient.get(this.URI).toPromise()
    .then(response => response as Vehicle[])
    .catch(() => {
      throw new Error('Erro ao buscar o veículo !');
    });
  }

  async findById(vehicleId: string):Promise<Observable<Vehicle>> {
    return this.httpClient.get<Vehicle>(`${this.URI}/${vehicleId}`)
    .pipe(catchError((err) => {
      throw new Error(err)
    }));
  }
}
