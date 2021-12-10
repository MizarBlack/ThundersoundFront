import { Component, OnInit } from '@angular/core';
import { Album } from '../../../../models/album.model';
import { AlbumService } from '../../../../service/album.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.scss']
})
export class AddAlbumComponent implements OnInit {

  public album: Album = {
    name: '',
    description: '',
    release_date: ''
  };
  submitted = false;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
  }

  saveAlbum(): void {
    const data = {
      name: this.album.name,
      description: this.album.description,
      release_date: this.album.release_date
    };

    this.albumService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newAlbum(): void {
    this.submitted = false;
    this.album = {
      name: '',
      description: '',
      release_date: ''
    };
  }


}
