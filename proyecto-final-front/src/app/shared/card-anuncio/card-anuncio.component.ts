import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-anuncio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-anuncio.component.html',
})
export class CardAnuncioComponent {
  @Input() anuncio: any;

  // Eventos de salida (emisión)
  @Output() eliminar = new EventEmitter<any>();
  @Output() editar = new EventEmitter<any>();
  @Output() visualizar = new EventEmitter<any>();

  // Método de visualización
  onVisualizar() {
    this.visualizar.emit(this.anuncio);
  }

  // Método de eliminación
  onEliminar() {
    this.eliminar.emit(this.anuncio);
  }

  // Método de edición
  onEditar() {
    this.editar.emit(this.anuncio);
  }
}
