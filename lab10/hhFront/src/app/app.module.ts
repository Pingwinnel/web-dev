import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhoto } from './album_photo';
import { AlbumPhotoComponent } from './album-photo/album-photo.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'albums',component:AlbumListComponent},
      {path:'albums/:id',component:AlbumDetailComponent},
      {path:'albums/:id/photos',component:AlbumPhotoComponent},
      { path: '', redirectTo:"/home", pathMatch:'full'  }
    ]),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AlbumListComponent,
    AlbumDetailComponent,
    AlbumPhotoComponent,
    TopBarComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/