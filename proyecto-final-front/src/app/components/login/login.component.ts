import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router'; // Importamos el Router
import { Usuario } from '../../models/usuario.model'; // Asegúrate de que la ruta sea correcta

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
  private router = inject(Router);

  ngOnInit() {
    document.body.classList.add('login-page');
  }

  ngOnDestroy() {
    document.body.classList.remove('login-page');
  }

  onSubmit() {
    this.usuariosService.login(this.email, this.password).subscribe({
      next: (usuario: Usuario) => {
        localStorage.setItem('usuario', JSON.stringify(usuario)); // 👈 Guardamos al usuario
        this.router.navigate(['/']); // 👈 Redirigir al home u otra ruta
      },
      error: (err) => {
        this.mensaje = err.error?.error || 'Error al iniciar sesión';
      }
    });
  }
}