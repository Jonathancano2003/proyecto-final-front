import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-ad',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-ad.component.html',
  styleUrl: './new-ad.component.css'
})
export class NewAdComponent {
  newAdForm: FormGroup;

  marcas: string[] = [
    'Abarth', 'Alfa Romeo', 'Audi', 'Aston Martin', 'BMW', 'Bentley', 'Bugatti', 'BYD',
    'Cadillac', 'Chevrolet', 'Citroën', 'Cupra', 'Dacia', 'Dodge', 
    'Fiat', 'Ford', 'Honda', 'Hyundai', 'Kia', 'Mazda', 'Mercedes-Benz', 'Nissan', 'Opel', 'Peugeot',
    'Renault', 'Seat', 'Skoda', 'Toyota', 'Volkswagen', 'Volvo'
  ];

  constructor(private fb: FormBuilder) {
    this.newAdForm = this.fb.group({
      brand: [''],
      model: [''],
      year: [''],
      price: [''],
      description: [''],
      photo: ['']
    });
  }

  onSubmit() {
    console.log(this.newAdForm.value);
  }

}
