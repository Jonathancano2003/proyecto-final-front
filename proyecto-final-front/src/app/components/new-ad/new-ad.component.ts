import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-ad',
  imports: [],
  templateUrl: './new-ad.component.html',
  styleUrl: './new-ad.component.css'
})
export class NewAdComponent {
  newAdForm: FormGroup;

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
