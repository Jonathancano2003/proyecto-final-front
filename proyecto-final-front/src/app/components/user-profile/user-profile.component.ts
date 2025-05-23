import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  mostrarFormulario = false;

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private usuariosService = inject(UsuariosService);
  private router = inject(Router);

  constructor() {
    this.userProfileForm = this.fb.group({
      nombre: [''],
      email: [''],
      contraseña: ['']
    });
  }

  ngOnInit() {
    const usuario = this.authService.getUsuarioActual();
    if (usuario) {
      this.userProfileForm.patchValue({
        nombre: usuario.nombre,
        email: usuario.email
      });
    }
  }

  onSubmit() {
    const usuarioActual = this.authService.getUsuarioActual();

    if (usuarioActual?.id) {
      const datosActualizados = this.userProfileForm.value;

      this.usuariosService.actualizarUsuario(usuarioActual.id, datosActualizados)
        .subscribe({
          next: () => {
            alert('Perfil actualizado correctamente');
            this.mostrarFormulario = false;
          },
          error: err => {
            console.error('Error al actualizar perfil', err);
            alert('Hubo un error al actualizar el perfil');
          }
        });
    }
  }

  onDelete() {
    const usuarioActual = this.authService.getUsuarioActual();

    if (usuarioActual?.id && confirm('¿Estás seguro de que quieres eliminar tu perfil?')) {
      this.usuariosService.eliminarUsuario(usuarioActual.id)
        .subscribe({
          next: () => {
            alert('Perfil eliminado correctamente');
            this.authService.logout(); // si tienes este método
            this.router.navigate(['/']);
          },
          error: err => {
            console.error('Error al eliminar perfil', err);
            alert('Hubo un error al eliminar el perfil');
          }
        });
    }
  }

  irAFavoritos() {
    this.router.navigate(['/favoritos']);
  }
}
