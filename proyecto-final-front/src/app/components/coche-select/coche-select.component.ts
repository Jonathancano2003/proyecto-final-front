import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosService } from '../../services/vehiculos.service';
import { FavoritosService } from '../../services/favoritos.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-coche-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coche-select.component.html',
  styleUrl: './coche-select.component.css'
})
export class CocheSelectComponent implements OnInit {
  car: any;

  constructor(
    private vehiculosService: VehiculosService,
    private favoritosService: FavoritosService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.car = this.vehiculosService.getSelectedCar();

    // Fallback si no hay coche (por ejemplo si se entra directo a la ruta)
    if (!this.car) {
      this.car = {
        marca: 'BMW',
        modelo: 'Serie 3',
        year: 0,
        kilometraje: 0,
        precio: 0,
        descripcion: '',
        imagen: 'assets/images/bmw-serie3.jpg'
      };
    }
    
  }

  guardarEnFavoritos() {
    const usuario = this.authService.getUsuarioActual();
    if (!usuario || !this.car?.id) {
      console.warn('Usuario o coche no definidos.');
      return;
    }

    this.favoritosService.guardarFavorito(usuario.id, this.car.id).subscribe({
      next: () => alert('¡Coche añadido a favoritos!'),
      error: (err) => console.error('Error al guardar favorito:', err)
    });
  }
}
