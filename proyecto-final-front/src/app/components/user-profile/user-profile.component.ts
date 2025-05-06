import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  mostrarFormulario = false;

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  constructor() {
    this.userProfileForm = this.fb.group({
      nombre: [''],
      username: [''],
      email: [''],
      password: [''],
      telefono: [''],
      ciudad: ['']
    });
  }

  ngOnInit() {
    const usuario = this.authService.getUsuarioActual();
    if (usuario) {
      this.userProfileForm.patchValue({
        nombre: usuario.nombre,
        username: usuario.username || '',
        email: usuario.email,
        telefono: usuario.telefono || '',
        ciudad: usuario.ciudad || ''
      });
    }
  }

  onSubmit() {
    console.log(this.userProfileForm.value);
  }
  onDelete() {
    // Lógica futura para eliminar el perfil del usuario
    console.log('Eliminar perfil (falta implementar)');
  }
  
}
