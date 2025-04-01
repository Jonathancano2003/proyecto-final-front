import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { RegisterComponent } from './components/register/register.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

import { AnunciosComponent } from './admin/anuncios/anuncios.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'inicio', component: PaginaInicioComponent },
  { path: 'card', component: CarCardComponent },
  { path: 'resultados', component: ResultadosComponent },
  { path: 'admin', component: AdminPanelComponent },

  // 👉 Añade estas rutas
  { path: 'admin/usuarios', component: UsuariosComponent },
  { path: 'admin/anuncios', component: AnunciosComponent },

  // Ruta comodín
  { path: '**', redirectTo: 'login' }
];
