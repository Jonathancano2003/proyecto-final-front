import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAnuncioComponent } from '../../shared/card-anuncio/card-anuncio.component';
import { VehiculosService } from './../../services/vehiculos.service';
import { Coche } from '../../models/coche.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anuncios',
  standalone: true,
  imports: [CommonModule, CardAnuncioComponent],
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {
  coches: Coche[] = [];
  page: number = 1;
  pageSize: number = 10;

  private vehiculosService = inject(VehiculosService);
  private router = inject(Router);

  ngOnInit() {
    this.loadCoches();
  }

  loadCoches() {
    this.vehiculosService.getVehiculos().subscribe({
      next: (data) => {
        this.coches = data;
      },
      error: (err) => {
        console.error('Error al obtener vehículos:', err);
      }
    });
  }

  get cochesPaginados(): Coche[] {
    const start = (this.page - 1) * this.pageSize;
    return this.coches.slice(start, start + this.pageSize);
  }

  siguientePagina() {
    if ((this.page * this.pageSize) < this.coches.length) {
      this.page++;
    }
  }

  anteriorPagina() {
    if (this.page > 1) {
      this.page--;
    }
  }

  onEliminar(coche: Coche) {
    this.vehiculosService.deleteCoche(coche.id).subscribe({
      next: () => {
        this.coches = this.coches.filter(c => c.id !== coche.id);
      },
      error: (err) => {
        console.error('Error al eliminar coche:', err);
      }
    });
  }

  onEditar(coche: Coche) {
    this.vehiculosService.setSelectedCar(coche);
    this.router.navigate(['/editar-coche']);
  }

  onVisualizar(coche: Coche) {
    this.vehiculosService.setSelectedCar(coche);
    this.router.navigate(['/coche-select']);
  }
}
