// src/app/components/navbar/navbar.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  menuActive = false;
  dropdownActive = false;
  mostrarCarrito = false;
  carrito: any[] = [];
  totalCarrito: number = 0;
  logeado: boolean = false;
  private cartSub!: Subscription;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

 
private authSub!: Subscription;

ngOnInit(): void {
  this.authSub = this.authService.estadoLogin().subscribe(estado => {
    this.logeado = estado;
  });

  this.cartSub = this.cartService.getCartObservable().subscribe((carrito) => {
    this.carrito = carrito;
    this.totalCarrito = carrito.reduce((sum, item) => sum + (item.precio || 0), 0);
  });
}

ngOnDestroy(): void {
  if (this.authSub) this.authSub.unsubscribe();
  if (this.cartSub) this.cartSub.unsubscribe();
}


  toggleCarrito() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return;
    }
    this.mostrarCarrito = !this.mostrarCarrito;
  }

  eliminar(id: number) {
    this.cartService.removeFromCart(id);
  }

  gestionarLoginLogout() {
    if (this.authService.isAuthenticated()) {
      const confirmar = confirm('¿Deseas cerrar sesión?');
      if (confirmar) {
        this.authService.logout();
        this.router.navigate(['/login']);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }

  irAlPerfil() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return;
    }
    this.router.navigate(['/profile']);
  }
}
