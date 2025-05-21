import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarCardComponent } from '../../components/car-card/car-card.component';
import { VehiculosService } from '../../services/vehiculos.service';
import { Router } from '@angular/router';
import { Coche } from '../../models/coche.model';

@Component({
  selector: 'app-resultados',
  standalone: true,
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule, CarCardComponent]
})
export class ResultadosComponent implements OnInit {
  cars: Coche[] = [];
  filteredCars: Coche[] = [];

  searchQuery: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;

  private vehiculosService = inject(VehiculosService);
  private router = inject(Router);

  ngOnInit(): void {
    this.vehiculosService.getVehiculos().subscribe({
      next: (data) => {
        this.cars = data;
        this.applyFilters(); // Mostrar todo por defecto
      },
      error: (err) => {
        console.error('Error al obtener coches:', err);
      }
    });
  }

  applyFilters(): void {
    const query = this.searchQuery.toLowerCase().trim();

    let filtered = this.cars.filter(car =>
      car.marca.toLowerCase().includes(query) ||
      car.modelo.toLowerCase().includes(query)
    );

    this.totalPages = Math.ceil(filtered.length / this.itemsPerPage);
    this.paginate(filtered);
  }

  paginate(data: Coche[]): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.filteredCars = data.slice(start, end);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.applyFilters();
    }
  }

  resetSearch(): void {
    this.searchQuery = '';
    this.applyFilters();
  }

  selectCar(car: Coche): void {
    this.vehiculosService.setSelectedCar(car);
    this.router.navigate(['/coche-select']);
  }
}
