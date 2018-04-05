import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';

import { ThumbnailLoaderComponent } from './pokemon/thumbnail-loader/thumbnail-loader.component';
import { ThumbnailComponent } from './pokemon/thumbnail/thumbnail.component';
import { ErrorComponent } from './error/error/error.component';


import { ApiService } from './services/api.service';


const routes: Routes = [
  {
    path: "pokemon",
    component: ThumbnailLoaderComponent
  },
  {
    path: '',
    redirectTo: '/pokemon',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ThumbnailComponent,
    ThumbnailLoaderComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Routes
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
