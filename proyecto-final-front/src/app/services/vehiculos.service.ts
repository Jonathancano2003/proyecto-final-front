import { Injectable } from '@angular/core';
import { Coche } from '../models/coche.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  private selectedCar: Coche | null = null;

  constructor() {}

  getVehiculos(): Coche[] {
    return [
      {
        brand: 'BMW',
        model: 'Serie 3',
        year: 2023,
        mileage: 45000,
        image: 'assets/images/bmw-serie3.jpg',
        description: 'Sporty car with great performance.',
        price: 27900
      },
      {
        brand: 'BMW',
        model: 'Serie 2',
        year: 2022,
        mileage: 32000,
        image: 'assets/images/bmw-serie3.jpg',
        description: 'Compact, elegant and powerful.',
        price: 25500
      },
      {
        brand: 'BMW',
        model: 'Serie 1',
        year: 2021,
        mileage: 58000,
        image: 'assets/images/bmw-serie3.jpg',
        description: 'Perfect for city and long trips.',
        price: 22900
      },
      {
        brand: 'BMW',
        model: 'Serie 1',
        year: 2021,
        mileage: 58000,
        image: 'assets/images/bmw-serie3.jpg',
        description: 'Perfect for city and long trips.',
        price: 22900
      },
      {
        brand: 'BMW',
        model: 'Serie 1',
        year: 2021,
        mileage: 58000,
        image: 'assets/images/bmw-serie3.jpg',
        description: 'Perfect for city and long trips.',
        price: 22900
      },
      {
        brand: 'BMW',
        model: 'Serie 1',
        year: 2021,
        mileage: 58000,
        image: 'assets/images/bmw-serie3.jpg',
        description: 'Perfect for city and long trips.',
        price: 22900
      },
      {
        brand: 'BMW',
        model: 'Serie 1',
        year: 2021,
        mileage: 58000,
        image: 'assets/images/bmw-serie3.jpg',
        description: 'Perfect for city and long trips.',
        price: 22900
      },
      {
        brand: 'BMW',
        model: 'Serie 1',
        year: 2021,
        mileage: 58000,
        image: 'assets/images/bmw-serie3.jpg',
        description: 'Perfect for city and long trips.',
        price: 22900
      },
      {
        brand: 'BMW',
        model: 'Serie 1',
        year: 2021,
        mileage: 58000,
        image: 'assets/images/bmw-serie3.jpg',
        description: 'Perfect for city and long trips.',
        price: 22900
      },
      {
        brand: 'BMW',
        model: 'Serie 1',
        year: 2021,
        mileage: 58000,
        image: 'assets/images/bmw-serie3.jpg',
        description: 'Perfect for city and long trips.',
        price: 22900
      },
      {
        brand: 'BMW',
        model: 'Serie 1',
        year: 2021,
        mileage: 58000,
        image: 'assets/images/bmw-serie3.jpg',
        description: 'Perfect for city and long trips.',
        price: 22900
      }
    ];
  }

  setSelectedCar(car: Coche): void {
    this.selectedCar = car;
  }

  getSelectedCar(): Coche | null {
    return this.selectedCar;
  }
}
