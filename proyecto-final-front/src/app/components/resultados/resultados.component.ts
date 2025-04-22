import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarCardComponent } from '../../components/car-card/car-card.component';
import { VehiculosService } from '../../services/vehiculos.service';
import { Router } from '@angular/router';
import { Coche } from '../../models/coche.model';

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

  cars: Coche[] = [];

  private vehiculosService = inject(VehiculosService);
  private router = inject(Router);

  ngOnInit(): void {
    this.cars = this.vehiculosService.getVehiculos();
  }

  selectCar(car: Coche): void {
    this.vehiculosService.setSelectedCar(car);
    this.router.navigate(['/coche-select']);
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
