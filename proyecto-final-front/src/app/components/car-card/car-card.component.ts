import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-card',
  standalone: true,
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
  imports: [CommonModule]
})
export class CarCardComponent {
  @Input() carImage: string = '';
  @Input() vehicleName: string = '';
  @Input() kilometers: number = 0;
  @Input() power: number = 0;
  @Input() price: number = 0;

  @Output() detailsClicked = new EventEmitter<void>();

  onDetailsClick() {
    this.detailsClicked.emit();
  }
}
