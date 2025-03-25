import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
  standalone: true, // Asegúrate de que el componente sea standalone
  imports: [CommonModule] // Importa CommonModule para usar pipes como number y currency
})
export class CarCardComponent {
  @Input() carImage: string = 'https://via.placeholder.com/120x80';
  @Input() vehicleName: string = 'Vehículo Lorem';
  @Input() kilometers: number = 123000;
  @Input() power: number = 120;
  @Input() price: number = 23000;

  @Output() detailsClicked = new EventEmitter<void>(); // Para emitir eventos al componente padre

  onDetailsClick() {
    this.detailsClicked.emit();
  }
}