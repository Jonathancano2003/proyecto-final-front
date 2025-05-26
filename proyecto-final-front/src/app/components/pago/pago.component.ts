import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pago.component.html',
  styleUrl: './pago.component.css'
})
export class PagoComponent {
  nombre = '';
  tarjeta = '';
  expiracion = '';
  cvv = '';

  constructor(private router: Router) {}

  pagar(): void {
    alert('¡Pago realizado con éxito! 🎉');
    this.router.navigate(['/inicio']);
  }
}
