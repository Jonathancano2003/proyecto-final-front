import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Cambia esto por la URL real de tu backend

  constructor(private http: HttpClient) {}

  // Método para registrar un nuevo usuario
  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/register`, { email, password });
  }

  // Método para iniciar sesión
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/login`, { email, password });
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('token'); // Elimina el token del almacenamiento
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token'); // Retorna true si el token existe
  }
}
