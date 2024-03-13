import { Component, OnInit } from '@angular/core';
import { AlbumPhoto } from '../album_photo';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../album-service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-album-photo',
  templateUrl: './album-photo.component.html',
  styleUrls: ['./album-photo.component.css']
})
export class AlbumPhotoComponent implements OnInit {
  albumPhotos$: BehaviorSubject<AlbumPhoto[]> = new BehaviorSubject<AlbumPhoto[]>([]);

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) {}

  ngOnInit(): void {
    const routePar = this.route.snapshot.paramMap;
    const albumIdRoute = Number(routePar.get('id'));

    this.albumsService.getAlbumPhotos(albumIdRoute).subscribe(albumPhoto => {
      this.albumPhotos$.next(albumPhoto);
    });
  }
}
