import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent {
// Valor recebido para a busca dos pokemons
@Input() pokemonLoaded: boolean = false;
}
