import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Importa CommonModule
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-pagina-inicio',
  standalone: true, 
  imports: [CommonModule, FormsModule], // <-- Agrega CommonModule aquí
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent {
  brands = ['Alfa Romeo', 'Audi', 'BMW', 'Byd', 'Citroen'];
  models = ['C-HR', 'Camry', 'Corolla', 'GR Supra', 'GR Yaris'];

  selectedBrand: string[] = [];
  selectedModel: string[] = [];
  searchQuery: string = '';

  toggleSelection(option: string, type: 'brand' | 'model') {
    if (type === 'brand') {
      this.selectedBrand.includes(option) 
        ? this.selectedBrand = this.selectedBrand.filter(b => b !== option)
        : this.selectedBrand.push(option);
    } else {
      this.selectedModel.includes(option) 
        ? this.selectedModel = this.selectedModel.filter(m => m !== option)
        : this.selectedModel.push(option);
    }
  }

  searchCars() {
    console.log('Buscando coches con:', {
      marcas: this.selectedBrand,
      modelos: this.selectedModel,
      consulta: this.searchQuery
    });
  }
}
