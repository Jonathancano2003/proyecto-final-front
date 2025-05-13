import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favorito } from '../models/favorito.model';
import { Coche } from '../models/coche.model'; // <--- asegúrate de importar

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private apiUrl = 'http://127.0.0.1:8000/api/favoritos';

  constructor(private http: HttpClient) {}

  guardarFavorito(usuarioId: number, cocheId: number): Observable<Favorito> {
    return this.http.post<Favorito>(this.apiUrl, {
      usuario: usuarioId,
      coche: cocheId
    });
  }

  // 👇 CORREGIDO: ahora devuelve Coche[]
  obtenerFavoritosPorUsuario(usuarioId: number): Observable<Coche[]> {
    return this.http.get<Coche[]>(`${this.apiUrl}/usuario/${usuarioId}`);
  }

  eliminarFavorito(favoritoId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${favoritoId}`);
  }
}
