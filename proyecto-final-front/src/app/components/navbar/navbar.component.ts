import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuActive = false;
  dropdownActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive; 
  }
  toggleDropdown() {
    this.dropdownActive = !this.dropdownActive;  // Alternar el desplegable
  }
}