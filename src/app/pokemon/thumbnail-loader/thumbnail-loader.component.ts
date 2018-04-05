import { Component, OnInit } from '@angular/core';

import { ApiService, PokemonLink, PokemonTemplate } from '../../services/api.service';

@Component({
  selector: 'app-thumbnail-loader',
  templateUrl: './thumbnail-loader.component.html',
  styleUrls: ['./thumbnail-loader.component.css']
})

export class ThumbnailLoaderComponent implements OnInit {

  public pokeList: Array<PokemonLink>;
  public numberOfPokemon: number;

  constructor(private api: ApiService){
    this.init();
  }

  private init(){
    let numberOfPokemon = 151;
    let link: string = "http://pokeapi.salestock.net/api/v2/pokemon/?limit="+numberOfPokemon;

    // Loads the pokemons
    this.api.getFromAPI(link).subscribe((data: PokemonTemplate) => {
      this.pokeList = data.results;
      this.numberOfPokemon = data.results.length;
    },
    (e) => {
      console.error(e);
    });
  }


  ngOnInit() {
    
  }

}
