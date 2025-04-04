import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardUsuarioComponent } from "../../shared/card-usuario/card-usuario.component";
import { UsuariosService } from './../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, CardUsuarioComponent],
  templateUrl: './usuarios.component.html',
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuarios = this.usuariosService.getUsuarios();
  }
}
