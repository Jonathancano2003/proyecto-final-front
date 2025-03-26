import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coche-select',
  imports: [],
  templateUrl: './coche-select.component.html',
  styleUrl: './coche-select.component.css'
})
export class CocheSelectComponent {
  @Input() car: any;
}
