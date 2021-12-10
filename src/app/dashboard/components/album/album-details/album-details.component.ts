import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../../../models/album.model';
import { AlbumService } from '../../../../service/album.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentAlbum: Album = {
    name: '',
    description: '',
    release_date: ''
  };

  message = '';

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getAlbum(this.route.snapshot.params["id"]);
    }
  }

  getAlbum(id: number): void {
    this.albumService.get(id)
      .subscribe({
        next: (data) => {
          this.currentAlbum = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateAlbum(): void {
    this.message = '';

    this.albumService.update(this.currentAlbum.id, this.currentAlbum)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This album was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteAlbum(): void {
    this.albumService.delete(this.currentAlbum.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/album']);
        },
        error: (e) => console.error(e)
      });
  }

}
