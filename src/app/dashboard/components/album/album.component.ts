import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../../../models/album.model';
import { AlbumService } from '../../../service/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  albums?: Album[];
  currentAlbum: Album = {};
  currentIndex = -1;
  name = '';

  constructor(
    private albumService: AlbumService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.retrieveAlbums();
  }

  retrieveAlbums(): void {
    this.albumService.getAll()
      .subscribe({
        next: (data) => {
          this.albums = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  setActiveAlbum(album: Album, index: number): void {
    this.currentAlbum = album;
    this.currentIndex = index;
  }

  searchName(): void {
    this.currentAlbum = {};
    this.currentIndex = -1;

    this.albumService.findByName(this.name)
      .subscribe({
        next: (data) => {
          this.albums = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveAlbums();
    this.currentAlbum = {};
    this.currentIndex = -1;
  }

  deleteAlbum():void {
    this.albumService.delete(this.currentAlbum.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

}
