// src/app/services/anuncios.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {
  private anuncios = [
    { id: 1, titulo: 'BMW Serie 2', precio: 27500, kms: 45000 },
    { id: 2, titulo: 'Audi A3', precio: 23000, kms: 60000 }
  ];

  getAnuncios() {
    return this.anuncios;
  }
}
