import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosService } from '../../services/vehiculos.service';

@Component({
  selector: 'app-coche-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coche-select.component.html',
  styleUrl: './coche-select.component.css'
})
export class CocheSelectComponent implements OnInit {
  car: any;

  constructor(private vehiculosService: VehiculosService) {}

  ngOnInit() {
    this.car = this.vehiculosService.getSelectedCar();

    // Fallback si no hay coche (por ejemplo si se entra directo a la ruta)
    if (!this.car) {
      this.car = {
        vehicleName: 'BMW Serie 3',
        carImage: 'assets/images/bmw-serie3.jpg',
        kilometers: 0,
        power: 0,
        price: 0
      };
    }
  }
}
