import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedex2';
  pokemonLoaded = false;

// Recebe o valor do envento e altera o valor do pokemonLoaded
  loadingPokemon(value: boolean){
    this.pokemonLoaded = value;
  }
}
