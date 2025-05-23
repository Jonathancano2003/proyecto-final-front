import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  standalone: true,
  templateUrl: './card-usuario.component.html',
})
export class CardUsuarioComponent {
  @Input() usuario: any;

  @Output() eliminar = new EventEmitter<void>();
  @Output() editar = new EventEmitter<void>();
  @Output() visualizar = new EventEmitter<void>();

  onEliminar() {
    this.eliminar.emit();
  }

  onEditar() {
    this.editar.emit();
  }

  onVisualizar() {
    this.visualizar.emit();
  }
}
