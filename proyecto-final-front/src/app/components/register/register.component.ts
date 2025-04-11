import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  mensaje: string = '';

  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit() {
    document.body.classList.add('register-page');
  }

  ngOnDestroy() {
    document.body.classList.remove('register-page');
  }

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      this.mensaje = 'Las contraseñas no coinciden';
      return;
    }

    this.authService.register(this.name, this.email, this.password).subscribe({
      next: (res) => {
        this.mensaje = 'Usuario registrado correctamente';
        this.router.navigate(['/login']); // Redirige al login después del registro
      },
      error: (err) => {
        this.mensaje = err.error?.error || 'Error al registrar usuario';
      }
    });
  }
}

