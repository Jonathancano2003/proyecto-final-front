import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  private logeado$ = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor(private http: HttpClient) {}

  register(nombre: string, email: string, contraseña: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuarios/`, { nombre, email, contraseña });
  }

  login(email: string, contraseña: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuarios/login`, { email, contraseña });
  }

  logout(): void {
    localStorage.removeItem('usuario');
    this.logeado$.next(false);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('usuario');
  }

  getUsuarioActual(): any | null {
    const usuario = localStorage.getItem('usuario');
    return usuario ? JSON.parse(usuario) : null;
  }

  // 🔁 Estado observable
  estadoLogin(): Observable<boolean> {
    return this.logeado$.asObservable();
  }

  // ✅ Llamar esto manualmente después del login
  notificarLogin(): void {
    this.logeado$.next(true);
  }
}
