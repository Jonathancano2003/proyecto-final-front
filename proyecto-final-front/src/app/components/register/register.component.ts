import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';            // Campo para el nombre
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit() {
    console.log('Nombre:', this.name);
    console.log('Correo:', this.email);
    console.log('Contraseña:', this.password);
    console.log('Confirmar Contraseña:', this.confirmPassword);
  }
}
