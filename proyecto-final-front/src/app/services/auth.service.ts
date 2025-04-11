import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Base de tu API Symfony

  constructor(private http: HttpClient) {}

  // ✅ Registro con nombre, email y contraseña
  register(nombre: string, email: string, contraseña: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuarios/`, { nombre, email, contraseña });
  }

  // ✅ Login
  login(email: string, contraseña: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuarios/login`, { email, contraseña });
  }

  // ✅ Logout
  logout(): void {
    localStorage.removeItem('usuario'); // Usás 'usuario', no 'token'
  }

  // ✅ Verificar si está autenticado
  isAuthenticated(): boolean {
    return !!localStorage.getItem('usuario');
  }

  // ✅ Obtener el usuario actual
  getUsuarioActual(): any | null {
    const usuario = localStorage.getItem('usuario');
    return usuario ? JSON.parse(usuario) : null;
  }
}
