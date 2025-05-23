import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardUsuarioComponent } from '../../shared/card-usuario/card-usuario.component';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, CardUsuarioComponent],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuariosService.getAllUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (error) => {
        console.error('Error al obtener usuarios', error);
      }
    });
  }
  onEliminar(usuario: Usuario) {
    if (confirm(`¿Seguro que deseas eliminar a ${usuario.nombre}?`)) {
      this.usuariosService.eliminarUsuario(Number(usuario.id)).subscribe({
        next: () => {
          this.usuarios = this.usuarios.filter(u => u.id !== usuario.id);
        },
        error: (error) => {
          console.error('Error al eliminar usuario', error);
        }
      });
    }
  }
  
  onEditar(usuario: Usuario) {
    console.log('Editar usuario:', usuario);
    // Aquí podrías redirigir a una vista de edición o abrir un modal
  }
  
  onVisualizar(usuario: Usuario) {
    console.log('Visualizar usuario:', usuario);
    // Aquí podrías mostrar más detalles o navegar a un perfil
  }
  
}
