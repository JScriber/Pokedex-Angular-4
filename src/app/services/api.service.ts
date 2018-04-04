import { Injectable, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


export interface PokemonLink {
  name: string,
  url: string
}
export interface PokemonTemplate {

  previous: string,
  next: string,

  results: Array<PokemonLink>
}

@Injectable()
export class ApiService {


  private pokeList: Array<PokemonLink> = [];

  constructor(private http: HttpClient){
    this.getFromAPI();
  }

  public getPokeList(): Array<PokemonLink>{
    return this.pokeList;
  }

  public getFromAPI(): any{
    let numberOfPokemon = 151;

    let link: string = "http://pokeapi.salestock.net/api/v2/pokemon/?limit="+numberOfPokemon;

    // Get the json
    return this.http.get<PokemonTemplate>(link);
  }
}


