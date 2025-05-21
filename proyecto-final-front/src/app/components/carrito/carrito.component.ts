import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  carrito: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.actualizarCarrito();
  }

  actualizarCarrito() {
    this.carrito = this.cartService.getCart();
    this.total = this.carrito.reduce((sum, car) => sum + (car.precio || 0), 0);
  }

  eliminar(id: number): void {
    this.cartService.removeFromCart(id);
    this.actualizarCarrito();
  }

  vaciarCarrito(): void {
    this.cartService.clearCart();
    this.actualizarCarrito();
  }
}
