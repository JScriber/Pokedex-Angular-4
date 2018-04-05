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

  
  constructor() { }

  ngOnInit() {
    
  }

}
