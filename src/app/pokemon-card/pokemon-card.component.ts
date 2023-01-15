import { Component, Input, OnInit } from '@angular/core';
import { FullPokemon } from '../core/model/pokemon-details/full-pokemon.model';
import { PokemonService } from '../core/service/pokemon.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Type } from '../core/model/type.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  // Número do Pokemon recebido do PokemonList
  @Input()
  numero!: number;
  // Nome do Pokemon recebido do PokemonList
  pokemon!: FullPokemon;
  typeOneInfo!: Type;
  typeTwoInfo!: Type;
  closeResult = '';
  typeOne = '';
  typeTwo = '';

  constructor(private pokemonService: PokemonService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.getPokemon();
  }

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

  getPokemon() {
    this.pokemonService.getPokemonDetails(this.numero).subscribe(data => {
      this.pokemon = data;
      this.getTypesInfo();
    });
  }

  getTypesInfo() {
    if(this.pokemon.types.length === 1) {
      this.pokemonService.getTypeDetails(this.pokemon.types[0].type.url).subscribe(data => {
        this.typeOneInfo = data;
        this.typeOne = data.name;
      })
    } else {
      this.pokemonService.getTypeDetails(this.pokemon.types[0].type.url).subscribe(data => {
        this.typeOneInfo = data
        this.typeOne = data.name;
      })
      this.pokemonService.getTypeDetails(this.pokemon.types[1].type.url).subscribe(data => {
        this.typeTwoInfo = data
        this.typeTwo = data.name;
      })
    }
  }

  // Funções do modal
  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}
