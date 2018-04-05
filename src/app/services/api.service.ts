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

  }

  public getPokeList(): Array<PokemonLink>{
    return this.pokeList;
  }

  public getFromAPI(link: string): any{
    return this.http.get<PokemonTemplate>(link);
  }
}


