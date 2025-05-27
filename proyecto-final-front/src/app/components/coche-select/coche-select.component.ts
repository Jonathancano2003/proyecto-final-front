import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosService } from '../../services/vehiculos.service';
import { FavoritosService } from '../../services/favoritos.service';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coche-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coche-select.component.html',
  styleUrl: './coche-select.component.css'
})
export class CocheSelectComponent implements OnInit {
  car: any;
  favoritosIds = new Set<number>();

  constructor(
    private vehiculosService: VehiculosService,
    private favoritosService: FavoritosService,
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.car = this.vehiculosService.getSelectedCar();

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

    const usuario = this.authService.getUsuarioActual();
    if (!usuario) return;
    this.favoritosService.obtenerFavoritosPorUsuario(usuario.id).subscribe({
      next: (favoritos) => {
        this.favoritosIds = new Set(favoritos.map(c => c.id)); 
      },
      error: (err) => console.error('Error al cargar favoritos:', err)
    });
  }

  guardarEnFavoritos() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return;
    }

    const usuario = this.authService.getUsuarioActual();
    if (!usuario || !this.car?.id) {
      console.warn('Usuario o coche no definidos.');
      return;
    }

   
    if (this.favoritosIds.has(this.car.id)) {
      alert('⚠️ Este coche ya está en tus favoritos');
      return;
    }

    this.favoritosService.guardarFavorito(usuario.id, this.car.id).subscribe({
      next: () => {
        this.favoritosIds.add(this.car.id); 
        alert('✅ Coche añadido a favoritos');
      },
      error: (err) => console.error('Error al guardar favorito:', err)
    });
  }

  anadirAlCarrito() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return;
    }

    if (!this.car) return;
    this.cartService.addToCart(this.car);
    alert('✅ Coche añadido al carrito');
  }
}
