import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {

  // Nome do Pokemon recebido do PokemonList
  @Input()
  pokemon!: string;

  // Número do Pokemon recebido do PokemonList
  @Input()
  numero!: number;

  getImagePokemon() {
    const numeroFormato = this.leadingZero(this.numero);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormato}.png`;

  }

  // Função para adicionar 00 ao número
  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length <(size || 2)) {
      s = '0' + s;
    }
    return s;
  }
}
