import { Component, OnInit, Input } from '@angular/core';

import { ApiService, PokemonLink } from '../../services/api.service';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})


export class ThumbnailComponent implements OnInit {

  @Input()
  public identifier: PokemonLink;

  
  constructor(private api:ApiService) {
    
  }

  public showDetails(event: Event){
    let url: string = this.identifier.url;

    this.api.getFromAPI(url).subscribe((data: any) => {
      // Displays all the pokemons on the console
      //this.showPokemon(data.results);
      console.log(data);
    },
    (e) => {
      console.error(e);
    });
  }

  ngOnInit() {
    
  }

}
