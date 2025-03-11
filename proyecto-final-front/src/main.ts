// main.ts (en src/)

import { bootstrapApplication } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { provideRouter } from '@angular/router';

// Ajusta la ruta: desde src/ hasta src/app/
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [ provideRouter(routes) ]
})
.catch(err => console.error(err));
