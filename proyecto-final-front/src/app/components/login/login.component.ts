import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router'; // Importamos el Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  email: string = '';
  password: string = '';
  mensaje: string = '';

  private usuariosService = inject(UsuariosService);
  private router = inject(Router); // Inyectamos el Router

  ngOnInit() {
    document.body.classList.add('login-page');
  }

  ngOnDestroy() {
    document.body.classList.remove('login-page');
  }

  onSubmit() {
    console.log('Datos enviados:', { email: this.email, password: this.password });

    if (!this.email || !this.password) {
      this.mensaje = 'Por favor, completa todos los campos';
      return;
    }

    this.usuariosService.login(this.email, this.password).subscribe({
      next: (res) => {
        console.log('Respuesta del backend:', res); // Log para depurar
        if (res && res.message === 'Login exitoso') {
          this.mensaje = res.message;
          console.log('Usuario logueado:', res.usuario);
          // Redirigir a /inicio después de un login exitoso
          this.router.navigate(['/inicio']);
        } else {
          this.mensaje = 'Respuesta inesperada del servidor';
        }
      },
      error: (err) => {
        console.log('Error completo:', err); // Log para depurar
        this.mensaje = err.error?.error || 'Error al iniciar sesión';
      },
      complete: () => {
        console.log('Solicitud completada'); // Log para confirmar que la solicitud terminó
      }
    });
  }
}