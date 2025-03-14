import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component'; // Importa el Navbar

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent], // Asegúrate de importar el Navbar
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrección aquí (antes estaba "styleUrl")
})
export class AppComponent {
  title = 'proyecto-final-front';
}
