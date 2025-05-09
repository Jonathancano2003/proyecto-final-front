import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coche } from '../models/coche.model';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
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

  // Obtener todos los coches
  getVehiculos(): Observable<Coche[]> {
    return this.http.get<Coche[]>(this.apiUrl).pipe(
      tap((coches) => {
        
        this.cochesSubject.next(coches);
      })
    );
  }

  // Establecer el coche seleccionado
  setSelectedCar(car: Coche): void {
    this.selectedCar = car;
  }

  // Obtener el coche seleccionado
  getSelectedCar(): Coche | null {
    return this.selectedCar;
  }

  // Eliminar un coche por su id
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
}
