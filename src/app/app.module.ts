import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ThumbnailLoaderComponent } from './pokemon/thumbnail-loader/thumbnail-loader.component';
import { ThumbnailComponent } from './pokemon/thumbnail/thumbnail.component';


import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    ThumbnailComponent,
    ThumbnailLoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
