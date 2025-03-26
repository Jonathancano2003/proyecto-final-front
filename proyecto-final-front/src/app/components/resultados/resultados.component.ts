import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarCardComponent } from '../../components/car-card/car-card.component';
import { VehiculosService } from '../../services/vehiculos.service';

@Component({
  selector: 'app-resultados',
  standalone: true,
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
  imports: [CommonModule, FormsModule, CarCardComponent]
})
export class ResultadosComponent implements OnInit {
  filters = {
    allCategories: false,
    nuevos: false,
    ceroKm: false,
    novedades: false,
    ofertas: false
  };

  cars: any[] = [];
  selectedCar: any = null;

  constructor(private vehiculosService: VehiculosService) {}

  ngOnInit(): void {
    this.cars = this.vehiculosService.getVehiculos();
  }

  selectCar(car: any) {
    this.selectedCar = car;
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
