import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from '../../../../models/playlist.model';
import { PlaylistService } from '../../../../service/playlist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentPlaylist: Playlist = {
    name: '',
    user_id: -1
  };

  message = '';

  constructor(
    private playlistService: PlaylistService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      if (!this.viewMode) {
        this.message = '';
        this.getPlaylist(this.route.snapshot.params["id"]);
      }
    }

    getPlaylist(id: number): void {
    this.playlistService.get(id)
      .subscribe({
        next: (data) => {
          this.currentPlaylist = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePlaylist(): void {
    this.message = '';

    this.playlistService.update(this.currentPlaylist.id, this.currentPlaylist)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This playlist was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deletePlaylist(): void {
    this.playlistService.delete(this.currentPlaylist.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/playlist']);
        },
        error: (e) => console.error(e)
      });
  }

}
