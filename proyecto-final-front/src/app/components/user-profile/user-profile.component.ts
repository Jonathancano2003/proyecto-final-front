import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userProfileForm: FormGroup;
  mostrarFormulario = false;

  constructor(private fb: FormBuilder) {
    this.userProfileForm = this.fb.group({
      nombre: [''],
      username: [''],
      email: [''],
      password: [''],
      telefono: [''],
      ciudad: ['']
    });
  }

  onSubmit() {
    console.log(this.userProfileForm.value);
  }
}
