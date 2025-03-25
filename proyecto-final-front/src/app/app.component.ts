import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarCardComponent } from "./components/car-card/car-card.component"; // Importa el Navbar
import { FooterComponent } from './components/footer/footer.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CarCardComponent,FooterComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'proyecto-final-front';
}
