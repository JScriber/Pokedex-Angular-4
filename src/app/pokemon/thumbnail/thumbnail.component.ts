import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})


export class ThumbnailComponent implements OnInit {

  public name: string = "test";

  
  constructor() {
    console.log('Hey hey');
  }


  ngOnInit() {
    console.log("loaded");
  }

}
