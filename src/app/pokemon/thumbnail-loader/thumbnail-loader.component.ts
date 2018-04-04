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
    // Loads the pokemons
    this.api.getFromAPI().subscribe((data: PokemonTemplate) => {
      // Displays all the pokemons on the console
      //this.showPokemon(data.results);

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
