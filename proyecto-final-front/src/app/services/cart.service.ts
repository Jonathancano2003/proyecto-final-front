// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>(this.getCart());

  constructor() {}

  getCart(): any[] {
    const storedCart = localStorage.getItem('cart');
    this.cart = storedCart ? JSON.parse(storedCart) : [];
    return this.cart;
  }

  getCartObservable() {
    return this.cartSubject.asObservable();
  }

  private updateCart(newCart: any[]) {
    this.cart = newCart;
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartSubject.next(this.cart);
  }

  addToCart(item: any) {
    const updatedCart = [...this.getCart(), item];
    this.updateCart(updatedCart);
  }

  removeFromCart(id: number) {
    const updatedCart = this.getCart().filter((item) => item.id !== id);
    this.updateCart(updatedCart);
  }

  clearCart() {
    this.updateCart([]);
  }
}
