import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehiculosService } from '../../../services/vehiculos.service';
import { Router } from '@angular/router';
import { Coche } from '../../../models/coche.model';

@Component({
  selector: 'app-editar-coche',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-coche.component.html',
})
export class EditarCocheComponent implements OnInit {
  coche: Coche | null = null;

  constructor(
    private vehiculosService: VehiculosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.coche = this.vehiculosService.getSelectedCar();
    if (!this.coche) {
      // Si no hay coche seleccionado, redirigimos
      this.router.navigate(['/admin/anuncios']);
    }
  }

  guardarCambios() {
    if (this.coche) {
      this.vehiculosService.updateCoche(this.coche).subscribe({
        next: () => {
          alert('Coche actualizado correctamente');
          this.router.navigate(['/admin/anuncios']);
        },
        error: err => console.error('Error al actualizar', err)
      });
    }
  }
}
