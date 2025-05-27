import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
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

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'inicio', component: PaginaInicioComponent },
  { path: 'card', component: CarCardComponent },
  { path: 'resultados', component: ResultadosComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'perfil', component: UserProfileComponent, canActivate: [authGuard] },
  { path: 'new-ad', component: NewAdComponent },
  { path: 'coche-select', component: CocheSelectComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'admin/usuarios', component: UsuariosComponent },
  {
    path: 'pago',
    loadComponent: () => import('./components/pago/pago.component').then(m => m.PagoComponent)
  },
  { path: 'admin/usuarios/:id/editar', component: UserProfileComponent },

  // ADMIN
  { path: 'admin/anuncios', component: AnunciosComponent },
  { path: 'admin/crear-coche', loadComponent: () => import('./admin/crear-coche/crear-coche.component').then(m => m.CrearCocheComponent) },
  { path: 'editar-coche', component: EditarCocheComponent },

  // Información
  { path: 'politica-privacidad', component: PoliticaPrivacidadComponent },
  { path: 'about-us', component: AboutUsComponent },

  // Wildcard
  { path: '**', redirectTo: 'login' }
];
