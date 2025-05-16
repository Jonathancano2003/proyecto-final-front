import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coche } from '../models/coche.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  private apiUrl = 'http://localhost:8000/api/cars/list';  
  private apiDeleteUrl = 'http://localhost:8000/api/cars/delete/'; 

  private cochesSubject = new BehaviorSubject<Coche[]>([]); 
  coches$ = this.cochesSubject.asObservable(); 

  private selectedCar: Coche | null = null;

  constructor(private http: HttpClient) {}

  getVehiculos(): Observable<Coche[]> {
    return this.http.get<Coche[]>(this.apiUrl).pipe(
      tap((coches) => {
        this.cochesSubject.next(coches);
      })
    );
  }

  setSelectedCar(car: Coche): void {
    this.selectedCar = car;
  }

  getSelectedCar(): Coche | null {
    return this.selectedCar;
  }

  updateCoche(coche: Coche): Observable<any> {
    const url = `http://localhost:8000/api/cars/update/${coche.id}`;
    
    const payload = {
      marca: coche.marca,
      modelo: coche.modelo,
      año: coche.year,
      kilometraje: coche.kilometraje,
      precio: coche.precio,
      descripcion: coche.descripcion,
      imagen: coche.imagen,
    };
  
    return this.http.put(url, payload);
  }

  deleteCoche(id: number): Observable<any> {
    const url = `${this.apiDeleteUrl}${id}`;
    return this.http.delete(url).pipe(
      tap(() => {
        const cochesActuales = this.cochesSubject.getValue();
        const cochesFiltrados = cochesActuales.filter(c => c.id !== id);  
        this.cochesSubject.next(cochesFiltrados);  
      })
    );
  }
createCoche(coche: Coche): Observable<any> {
  const url = 'http://localhost:8000/api/cars/create';
  return this.http.post(url, {
    marca: coche.marca,
    modelo: coche.modelo,
    year: coche.year,
    kilometraje: coche.kilometraje,
    precio: coche.precio,
    descripcion: coche.descripcion,
    imagen: coche.imagen
  });
}

}
