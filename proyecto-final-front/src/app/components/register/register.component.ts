import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  name: string = '';            // Campo para el nombre
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  ngOnInit() {
    document.body.classList.add('register-page');
  }

  ngOnDestroy() {
    document.body.classList.remove('register-page');
  }
  onSubmit() {
    console.log('Nombre:', this.name);
    console.log('Correo:', this.email);
    console.log('Contraseña:', this.password);
    console.log('Confirmar Contraseña:', this.confirmPassword);
  }
}
