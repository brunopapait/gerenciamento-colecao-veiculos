import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../model/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  URI = 'http://localhost:3000/vehicles';
  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get(this.URI).toPromise().then(response => response as Vehicle[]);
  }
}
