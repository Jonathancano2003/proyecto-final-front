import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // 🔹 Importar FormsModule
import { CarCardComponent } from '../../components/car-card/car-card.component';

@Component({
  selector: 'app-resultados',
  standalone: true,
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
  imports: [CommonModule, FormsModule, CarCardComponent] // 🔹 Agregar FormsModule y CarCardComponent
})
export class ResultadosComponent {
  filters = {
    allCategories: false,
    nuevos: false,
    ceroKm: false,
    novedades: false,
    ofertas: false
  };

  cars = [
    {
      carImage: 'assets/images/bmw-serie3.jpg',
      vehicleName: 'Seat León',
      kilometers: 123000,
      power: 120,
      price: 23000
    },
    {
      carImage: 'assets/images/bmw-serie3.jpg',
      vehicleName: 'BMW Serie 3',
      kilometers: 85000,
      power: 150,
      price: 28000
    },
    
  ];

  onCarDetails(car: any) {
    console.log("Detalles del coche seleccionado:", car);
  }

  resetFilters() {
    this.filters = {
      allCategories: false,
      nuevos: false,
      ceroKm: false,
      novedades: false,
      ofertas: false
    };
  }
}
