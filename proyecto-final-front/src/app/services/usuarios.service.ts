
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuarios = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', rol: 'admin' },
    { id: 2, nombre: 'María López', email: 'maria@example.com', rol: 'cliente' }
  ];

  getUsuarios() {
    return this.usuarios;
  }
}
