import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const usuario = this.authService.getUsuarioActual();
    if (usuario?.email === 'root@root.com') {
      return true;
    }
    this.router.navigate(['/inicio']);
    return false;
  }
}
