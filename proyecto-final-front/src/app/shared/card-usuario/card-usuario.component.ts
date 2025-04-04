import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  standalone: true,
  templateUrl: './card-usuario.component.html',
})
export class CardUsuarioComponent {
  @Input() usuario: any;
}
