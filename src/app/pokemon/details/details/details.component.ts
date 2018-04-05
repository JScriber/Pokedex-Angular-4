import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
      let wantedPokemon: number = this.route.snapshot.params['id'];



      console.log("Id "+wantedPokemon);

  }

  ngOnInit() {
  }

}
