import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


interface PokemonTemplate {
  name: string
}

@Injectable()
export class ApiService {

  constructor(http: HttpClient){

    this.getFromAPI(http);
  }


  public getFromAPI(http: HttpClient){
    let link: string = "http://pokeapi.salestock.net/api/v2/pokemon";

    // Get the json
    http.get(link)
    .subscribe((data: any) => {
      console.log(data);
    },
    e => console.error(e));

  }


  ngOnInit() {
    console.log('Service initialized')
  }
}


