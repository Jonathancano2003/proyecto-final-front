import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosService } from '../../services/favoritos.service';
import { AuthService } from '../../services/auth.service';
import { CarCardComponent } from '../car-card/car-card.component';
import { Coche } from '../../models/coche.model';
import { Router } from '@angular/router';
import { VehiculosService } from '../../services/vehiculos.service'; 

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  favoritos: Coche[] = [];
  idsFavoritos: Set<number> = new Set();


  private favoritosService = inject(FavoritosService);
  private vehiculosService = inject(VehiculosService); 
  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    const usuario = this.authService.getUsuarioActual();
    if (!usuario) return;

    this.favoritosService.obtenerFavoritosPorUsuario(usuario.id).subscribe({
      next: (data) => {
        this.favoritos = data;
        this.idsFavoritos = new Set(data.map(c => c.id)); 
      },
      error: (err) => console.error('Error al cargar favoritos:', err)
    });
  }

  verDetalles(car: Coche) {
    this.vehiculosService.setSelectedCar(car); 
    this.router.navigate(['/coche-select']);
  }
  agregarAFavoritos(coche: Coche) {
    const usuario = this.authService.getUsuarioActual();
    if (!usuario) return;
  
    if (this.idsFavoritos.has(coche.id)) {
      alert('Este coche ya está en tus favoritos');
      return;
    }
  
    this.favoritosService.guardarFavorito(usuario.id, coche.id).subscribe({
      next: () => {
        this.favoritos.push(coche);          
        this.idsFavoritos.add(coche.id);     
        alert('Coche añadido a favoritos');
      },
      error: (err) => console.error('Error al guardar favorito:', err)
    });
  }
}
