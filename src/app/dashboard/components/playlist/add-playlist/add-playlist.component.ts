import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../../../models/playlist.model';
import { PlaylistService } from '../../../../service/playlist.service';

@Component({
  selector: 'app-add-playlist',
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.scss']
})
export class AddPlaylistComponent implements OnInit {

  playlist: Playlist = {
    name: '',
    user_id: -1
  };
  submitted = false;

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
  }

  savePlaylist() :void {
    const data = {
      name: this.playlist.name,
      user_id: this.playlist.user_id
    };

    this.playlistService.create(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newPlaylist(): void {
    this.submitted = false;
    this.playlist = {
      name: '',
      user_id: -1
    };
  }

}
