import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userProfileForm: FormGroup;

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