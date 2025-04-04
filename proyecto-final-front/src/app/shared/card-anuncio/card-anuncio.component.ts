import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-anuncio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-anuncio.component.html',
})
export class CardAnuncioComponent {
  @Input() anuncio: any;
}
