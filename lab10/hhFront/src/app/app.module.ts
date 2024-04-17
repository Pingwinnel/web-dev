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
import { CommonModule } from '@angular/common';
import {CompanyDetailComponent} from "./company-detail/company-detail.component";
import {VacancyDetailsComponent} from "./vacancy-details/vacancy-details.component";


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'companies', component: AlbumListComponent },
      { path: 'companies/:id', component: CompanyDetailComponent },
      {path: 'vacancies/:id',component:VacancyDetailsComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AlbumListComponent,
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