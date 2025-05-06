import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coche } from '../models/coche.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  private apiUrl = 'http://localhost:8000/api/cars/list';

  private selectedCar: Coche | null = null;

  constructor(private http: HttpClient) {}

  getVehiculos(): Observable<Coche[]> {
    return this.http.get<Coche[]>(this.apiUrl);
  }

  setSelectedCar(car: Coche): void {
    this.selectedCar = car;
  }

  getSelectedCar(): Coche | null {
    return this.selectedCar;
  }
}
