import { Component, HostListener, Input, OnInit } from '@angular/core';
import { PokemonModel } from '../core/model/pokemon.model';
import { PokemonService } from '../core/service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {

  // Valor recebido quando busca um pokemon
  @Input() pokemonLoaded: boolean = false
  pokemons!: PokemonModel[]
  next!: string;


  constructor(private PokemonService: PokemonService) {}

  // busca os 20 primeiros pokemons ao iniciar a pagina
  ngOnInit() {
    this.PokemonService.getAllPokemons().subscribe(pokemons =>{
      this.pokemons = pokemons.results
      this.next = pokemons.next;
    } );
  }

  // busca os 20 próximos pokemons ao iniciar a pagina
  getNextPokemons(){
    if(this.next === null) {
      alert('Você já carregou todos os Pokemons')
      this.pokemonLoaded = false;
    }else{
      console.log(this.next)
      this.PokemonService.getNextPokemons(this.next).subscribe(pokemons => {
        console.log(pokemons)
        // Pega cada pokemons do Array recebido e acrescenta ao array de pokemon existente para
        pokemons.results.forEach(pkm => {
          this.pokemons.push(pkm)
        })
        this.next = pokemons.next;
      })
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if ((document.documentElement.clientHeight + window.scrollY) >= document.body.clientHeight) {
        this.getNextPokemons();
    }
  }

}
