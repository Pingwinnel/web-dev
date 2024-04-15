import { Component, OnInit } from '@angular/core';
import { AlbumsService } from "../album-service";
import { Album } from "../album";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  readonly base_url = "https://jsonplaceholder.typicode.com";
  albums$ = new BehaviorSubject<Album[]>([]);
  newAlbum: Album = new Album();

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.albumsService.getAlbums().subscribe(albums => {
      this.albums$.next(albums);
    });
  }

  createAlbum() {
    this.albumsService.addAlbum(this.newAlbum).subscribe(album => {
      const currentAlbums = this.albums$.value;
      this.albums$.next([album, ...currentAlbums]);
      this.newAlbum = new Album();
    });
  }

  deleteAlbum(album: Album) {
    this.albumsService.deleteAlbum(album.id).subscribe(() => {
      const currentAlbums = this.albums$.value.filter(a => a.id !== album.id);
      this.albums$.next([...currentAlbums]);
    });
  }

  updateAlbum(id: number, newTitle: string) {
    this.albumsService.updateAlbum(id, newTitle).subscribe(updatedAlbum => {
      const currentAlbums = this.albums$.value;
      const updatedAlbums = currentAlbums.map(album =>
        album.id === id ? { ...album, title: newTitle } : album
      );
      this.albums$.next(updatedAlbums);
    });
  }
}
