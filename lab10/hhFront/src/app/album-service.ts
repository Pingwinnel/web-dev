import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Album } from './album';
import { AlbumPhoto } from './album_photo';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.BASE_URL}/albums`);
  }

  getAlbumPhotos(albumId: number): Observable<AlbumPhoto[]> {
    return this.http.get<AlbumPhoto[]>(`${this.BASE_URL}/albums/${albumId}/photos`);
  }

  getAlbum(id: number) {
    return this.http.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }

  addAlbum(album: Album):Observable<Album> {
    return this.http.post<Album>(`${this.BASE_URL}/albums`,album);
  }

  deleteAlbum(id: number) {
    return this.http.delete<Album>(`${this.BASE_URL}/albums/${id}`);
  }

  updateAlbum(albumId: number, newTitle: string):Observable<Album> {
    const body = { title: newTitle };
    return this.http.put<Album>(`${this.BASE_URL}/albums/${albumId}`, body);
  }
}