import { Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coche-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coche-select.component.html',
  styleUrl: './coche-select.component.css'
})
export class CocheSelectComponent {
  @Input() car: any;

  ngOnInit() {
    if (!this.car) {
      this.car = {
        name: 'BMW Series 3',
        brand: 'BMW',
        model: 'Series 3',
        year: 2023,
        price: 79999,
        description: 'Un coche elegante para disfrutar por la ciudad.',
        imageUrl: 'assets/images/bmw-serie3.jpg'
      };
    }
  }
}
