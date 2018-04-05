import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService, PokemonLink } from '../../../services/api.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})


export class DetailsComponent implements OnInit {

  public name: string;
  public weight: number;
  public height: number;
  public types: Array<string> = [];
  public abilities: Array<string> = [];
  public moves: Array<string> = [];

  public colorClass: string = "";

  public frontSprite: string;


  private setClassFromTypes(): void {
    this.colorClass = this.types[0];
  }

  constructor(private route: ActivatedRoute, private api: ApiService) {
      let wantedPokemon: number = this.route.snapshot.params['id'];

      // Retrieves the informations on the Pokemon
      let url: string = "http://pokeapi.salestock.net/api/v2/pokemon/"+wantedPokemon;

      this.api.getFromAPI(url).subscribe((data: any) => {

        this.name = data.name;
        this.weight = (data.weight/10);
        this.height = (data.height/10);

        this.frontSprite = data.sprites.front_default;

        // Adds the types
        for(let i = 0; i < data.types.length; i++){
          this.types.push(data.types[i].type.name);
        }

        // Adds the moves
        for(let i = 0; i < data.moves.length; i++){
          this.moves.push(data.moves[i].move.name);
        }

        // Adds the abilities
        for(let i = 0; i < data.abilities.length; i++){
          this.abilities.push(data.abilities[i].ability.name);
        }

        this.setClassFromTypes();
      },
      (e) => {
        console.error(e);
      });
  }

  ngOnInit() {
  }

}
