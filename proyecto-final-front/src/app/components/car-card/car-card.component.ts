import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
  standalone: true, 
  imports: [CommonModule]
})
export class CarCardComponent {
  @Input() carImage: string = 'https://via.placeholder.com/120x80';
  @Input() vehicleName: string = 'Vehículo Lorem';
  @Input() kilometers: number = 123000;
  @Input() power: number = 120;
  @Input() price: number = 23000;

 
}