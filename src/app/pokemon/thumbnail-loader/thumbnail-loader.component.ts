import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-thumbnail-loader',
  templateUrl: './thumbnail-loader.component.html',
  styleUrls: ['./thumbnail-loader.component.css']
})

export class ThumbnailLoaderComponent implements OnInit {

  constructor(api: ApiService){

      console.log("Thumbnail loader loaded");
  }

  ngOnInit() {

  }

}
