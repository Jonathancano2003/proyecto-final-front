import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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

  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit() {
    document.body.classList.add('login-page');
  }

  ngOnDestroy() {
    document.body.classList.remove('login-page');
  }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next: (usuario) => {
        localStorage.setItem('usuario', JSON.stringify(usuario));
        this.authService.notificarLogin();

        // ✅ Esperar para que AuthGuard lea correctamente el localStorage
        setTimeout(() => {
          if (usuario.email === 'root@root.com') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/inicio']);
          }
        }, 100);
      },
      error: (err) => {
        this.mensaje = err.error?.error || 'Error al iniciar sesión';
      }
    });
  }
}
