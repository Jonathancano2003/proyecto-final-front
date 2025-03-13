import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { RegisterComponent } from './components/register/register.component';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'login' } ,
  { path: 'inicio', component: PaginaInicioComponent }
];
