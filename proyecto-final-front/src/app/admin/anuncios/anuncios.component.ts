import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAnuncioComponent } from '../../shared/card-anuncio/card-anuncio.component';
import { AnunciosService } from './../../services/anuncios.service';

@Component({
  selector: 'app-anuncios',
  standalone: true,
  imports: [CommonModule, CardAnuncioComponent],
  templateUrl: './anuncios.component.html'
})
export class AnunciosComponent implements OnInit {
  anuncios: any[] = [];

  constructor(private anunciosService: AnunciosService) {}

  ngOnInit() {
    this.anuncios = this.anunciosService.getAnuncios();
  }
}
