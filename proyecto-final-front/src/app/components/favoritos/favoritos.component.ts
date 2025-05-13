import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosService } from '../../services/favoritos.service';
import { AuthService } from '../../services/auth.service';
import { CarCardComponent } from '../car-card/car-card.component';
import { Coche } from '../../models/coche.model';
import { Router } from '@angular/router';
import { VehiculosService } from '../../services/vehiculos.service'; // ✅ Importar el servicio

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule, CarCardComponent],
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  favoritos: Coche[] = [];

  private favoritosService = inject(FavoritosService);
  private vehiculosService = inject(VehiculosService); // ✅ Inyectar
  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    const usuario = this.authService.getUsuarioActual();
    if (!usuario) return;

    this.favoritosService.obtenerFavoritosPorUsuario(usuario.id).subscribe({
      next: (data) => this.favoritos = data,
      error: (err) => console.error('Error al cargar favoritos:', err)
    });
  }

  verDetalles(car: Coche) {
    this.vehiculosService.setSelectedCar(car); // ✅ Guardar coche antes de navegar
    this.router.navigate(['/coche-select']);
  }
}
