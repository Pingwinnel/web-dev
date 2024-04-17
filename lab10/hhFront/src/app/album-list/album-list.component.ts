import { Component, OnInit } from '@angular/core';
import {ApiService} from "../album-service";
import {Company} from "../company";
import {Vacancy} from "../vacancy";
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  companie_list$ = new BehaviorSubject<Company[]>([]);


  constructor(private APIService: ApiService) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.APIService.getCompanies().subscribe(companies => {

      this.companie_list$.next(companies);
    });

  }






}
