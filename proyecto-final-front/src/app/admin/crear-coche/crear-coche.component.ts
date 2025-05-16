// admin/anuncios/crear-coche/crear-coche.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehiculosService } from '../../services/vehiculos.service';
import { Router } from '@angular/router';
import { Coche } from '../../models/coche.model';

@Component({
  selector: 'app-crear-coche',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-coche.component.html',
})
export class CrearCocheComponent {
  coche: Coche = {
    id: 0,
    marca: '',
    modelo: '',
    year: new Date().getFullYear(),
    kilometraje: 0,
    precio: 0,
    descripcion: '',
    imagen: ''
  };

  constructor(private vehiculosService: VehiculosService, private router: Router) {}

  crearCoche() {
    console.log(this.coche)
    this.vehiculosService.createCoche(this.coche).subscribe({
      next: () => {
        alert('Coche creado correctamente');
        this.router.navigate(['/admin/anuncios']);
      },
      error: err => console.error('Error al crear', err)
    });
  }
}
