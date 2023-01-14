import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonModel } from '../model/pokemon.model';
import { ResponseModel } from '../model/response.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) {

  }

  // Função para pegar 20 pokemons da API
  getAllPokemons():Observable<ResponseModel<PokemonModel[]>> {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=20";

    return this.httpClient.get<ResponseModel<PokemonModel[]>>(url)
  }
  // Função para pegar os proximos 20 pokemon
  getNextPokemons(url:string):Observable<ResponseModel<PokemonModel[]>> {
    return this.httpClient.get<ResponseModel<PokemonModel[]>>(url)
  }
}
