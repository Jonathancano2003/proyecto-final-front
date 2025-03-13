import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
export const routes: Routes = [{ path: 'login', component: LoginComponent },
    { path: 'inicio', component: PaginaInicioComponent }
];
