import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';

// My components
import { ThumbnailLoaderComponent } from './pokemon/thumbnail-loader/thumbnail-loader.component';
import { ThumbnailComponent } from './pokemon/thumbnail/thumbnail.component';
import { ErrorComponent } from './error/error/error.component';
import { DetailsComponent } from './pokemon/details/details/details.component';

import { ApiService } from './services/api.service';


const routes: Routes = [
  {
    path: "pokemon",
    component: ThumbnailLoaderComponent
  },
  {
    path: "pokemon/:id",
    component: DetailsComponent
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
    ErrorComponent,
    DetailsComponent
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
