import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor() {}

  getVehiculos() {
    return [
      {
        carImage: 'assets/images/bmw-serie3.jpg',
        vehicleName: 'BMW Serie 2',
        kilometers: 45000,
        power: 150,
        price: 27500
      },
      {
        carImage: 'assets/images/bmw-serie3.jpg',
        vehicleName: 'BMW Serie 2',
        kilometers: 60000,
        power: 136,
        price: 25000
      },
      {
        carImage: 'assets/images/bmw-serie3.jpg',
        vehicleName: 'BMW Serie 2',
        kilometers: 78000,
        power: 143,
        price: 23000
      }
    ];
  }
}
