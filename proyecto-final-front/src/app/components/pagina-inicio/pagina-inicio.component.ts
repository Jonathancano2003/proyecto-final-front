import { Component, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehiculosService } from '../../services/vehiculos.service';
import { Coche } from '../../models/coche.model';
import { Router } from '@angular/router';
import { CarCardComponent } from '../car-card/car-card.component';

@Component({
  selector: 'app-pagina-inicio',
  standalone: true,
  imports: [CommonModule, FormsModule, CarCardComponent],
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css'],
})
export class PaginaInicioComponent implements OnInit {
  coches: Coche[] = [];
  filteredCars: Coche[] = [];
  brands: string[] = [];
  models: string[] = [];
  selectedBrands: string[] = [];
  selectedModels: string[] = [];

  searchQuery = '';
  precioMin: number | null = null;
  precioMax: number | null = null;
  kilometrajeMax: number | null = null;
  yearMin: number | null = null;

  @ViewChild('slider', { static: false }) slider!: ElementRef;

  private vehiculosService = inject(VehiculosService);
  private router = inject(Router);

  ngOnInit(): void {
    this.vehiculosService.getVehiculos().subscribe({
      next: (data) => {
        this.coches = data;
        this.filteredCars = [...data];
        this.brands = [...new Set(data.map(c => c.marca))];
        this.models = [...new Set(data.map(c => c.modelo))];
      },
      error: (err) => {
        console.error('Error al cargar coches:', err);
      }
    });
  }

  toggleSelection(value: string, type: 'brand' | 'model') {
    const list = type === 'brand' ? this.selectedBrands : this.selectedModels;
    const index = list.indexOf(value);

    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(value);
    }
  }

  searchCars() {
    this.filteredCars = this.coches.filter(car => {
      const matchesBrand = this.selectedBrands.length === 0 || this.selectedBrands.includes(car.marca);
      const matchesModel = this.selectedModels.length === 0 || this.selectedModels.includes(car.modelo);
  
      // Si hay marcas y modelos seleccionados, permitimos coincidencia con cualquiera
      const matchesMarcaModelo =
        (this.selectedBrands.length > 0 && this.selectedModels.length > 0)
          ? this.selectedBrands.includes(car.marca) || this.selectedModels.includes(car.modelo)
          : matchesBrand && matchesModel;
  
      const matchesQuery = this.searchQuery === '' || (
        car.marca.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        car.modelo.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      const matchesPrecioMin = this.precioMin === null || car.precio >= this.precioMin;
      const matchesPrecioMax = this.precioMax === null || car.precio <= this.precioMax;
      const matchesKm = this.kilometrajeMax === null || car.kilometraje <= this.kilometrajeMax;
      const matchesYear = this.yearMin === null || car.year >= this.yearMin;
  
      return matchesMarcaModelo && matchesQuery && matchesPrecioMin && matchesPrecioMax && matchesKm && matchesYear;
    });
  }
  

  verDetalles(coche: Coche) {
    this.vehiculosService.setSelectedCar(coche);
    this.router.navigate(['/coche-select']);
  }

  currentIndex = 0;

scrollSlider(direction: number) {
  const total = this.filteredCars.length;
  this.currentIndex += direction;

  // Comportamiento circular
  if (this.currentIndex >= total) {
    this.currentIndex = 0;
  } else if (this.currentIndex < 0) {
    this.currentIndex = total - 1;
  }

  const el = this.slider?.nativeElement;
  if (el) {
    const cardWidth = el.offsetWidth;
    el.scrollTo({ left: this.currentIndex * cardWidth, behavior: 'smooth' });
  }
}
irAResultados() {
  this.router.navigate(['/resultados']);
}

}
