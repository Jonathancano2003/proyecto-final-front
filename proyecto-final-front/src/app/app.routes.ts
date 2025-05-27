import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { RegisterComponent } from './components/register/register.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NewAdComponent } from './components/new-ad/new-ad.component';
import { CocheSelectComponent } from './components/coche-select/coche-select.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { AnunciosComponent } from './admin/anuncios/anuncios.component';
import { EditarCocheComponent } from './admin/anuncios/editar-coche/editar-coche.component';
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { PagoComponent } from './components/pago/pago.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'inicio', component: PaginaInicioComponent, canActivate: [AuthGuard] },
  { path: 'card', component: CarCardComponent, canActivate: [AuthGuard] },
  { path: 'resultados', component: ResultadosComponent },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'new-ad', component: NewAdComponent, canActivate: [AuthGuard] },
  { path: 'coche-select', component: CocheSelectComponent, canActivate: [AuthGuard] },
  { path: 'favoritos', component: FavoritosComponent, canActivate: [AuthGuard] },
  { path: 'carrito', component: CarritoComponent, canActivate: [AuthGuard] },
  {
    path: 'pago',
    loadComponent: () => import('./components/pago/pago.component').then(m => m.PagoComponent),
    canActivate: [AuthGuard]
  },

  // Admin
  { path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard] },
  { path: 'admin/usuarios', component: UsuariosComponent, canActivate: [AdminGuard] },
  { path: 'admin/usuarios/:id/editar', component: UserProfileComponent, canActivate: [AdminGuard] },
  { path: 'admin/anuncios', component: AnunciosComponent, canActivate: [AdminGuard] },
  { path: 'admin/crear-coche', loadComponent: () => import('./admin/crear-coche/crear-coche.component').then(m => m.CrearCocheComponent), canActivate: [AdminGuard] },
  { path: 'editar-coche', component: EditarCocheComponent, canActivate: [AdminGuard] },

  // Información
  { path: 'politica-privacidad', component: PoliticaPrivacidadComponent },
  { path: 'about-us', component: AboutUsComponent },

  // Wildcard
  { path: '**', redirectTo: 'login' }
];
