import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAnuncioComponent } from '../../shared/card-anuncio/card-anuncio.component';
import { VehiculosService } from './../../services/vehiculos.service';
import { Coche } from '../../models/coche.model';

@Component({
  selector: 'app-anuncios',
  standalone: true,
  imports: [CommonModule, CardAnuncioComponent],
  templateUrl: './anuncios.component.html',
})
export class AnunciosComponent implements OnInit {
  coches: Coche[] = [];
  private vehiculosService = inject(VehiculosService);

  ngOnInit() {
    this.loadCoches();
  }

  // Cargar coches desde el servicio
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

  // Manejar la acción de eliminar un coche
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
    console.log('Editar coche:', coche);
  }

  
  onVisualizar(coche: Coche) {
    console.log('Visualizar coche:', coche);
  }
}
