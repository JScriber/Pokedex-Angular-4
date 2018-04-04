import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


interface PokemonTemplate {
  name: string
}

@Injectable()
export class ApiService {

  constructor(private http: HttpClient){
    let link: string = "http://pokeapi.salestock.net/api/v2/pokemon";


    http.get(link)
    .subscribe((data: any) => {
      console.log(data);
    },
    e => console.error(e));
  }

}
