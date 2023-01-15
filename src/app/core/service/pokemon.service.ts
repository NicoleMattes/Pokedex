import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonModel } from '../model/pokemon.model';
import { ResponseModel } from '../model/response.model';
import { FullPokemon } from '../model/pokemon-details/full-pokemon.model';
import { Type } from '../model/type.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = 'https://pokeapi.co/api/v2/pokemon';
  typeUrl = 'https://pokeapi.co/api/v2/type';

  constructor(private httpClient: HttpClient) {

  }

  // Função para pegar 20 pokemons da API
  getAllPokemons():Observable<ResponseModel<PokemonModel[]>> {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=10";

    return this.httpClient.get<ResponseModel<PokemonModel[]>>(url)
  }
  // Função para pegar os proximos 20 pokemon
  getNextPokemons(url:string):Observable<ResponseModel<PokemonModel[]>> {
    return this.httpClient.get<ResponseModel<PokemonModel[]>>(url)
  }

  getPokemonDetails(id: number):Observable<FullPokemon> {
    return this.httpClient.get<FullPokemon>(`${this.url}/${id}`)
  }

  getTypeDetails(url: string): Observable<Type> {
    return this.httpClient.get<Type>(url);
  }
}
