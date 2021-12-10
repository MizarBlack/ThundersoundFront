import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../../models/playlist.model';
import { PlaylistService } from '../../../service/playlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  playlists?: Playlist[];
  currentPlaylist: Playlist = {};
  currentIndex = -1;
  name = '';

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.retrievePlaylists();
  }

  retrievePlaylists(): void {
    this.playlistService.getAll()
      .subscribe({
        next: (data) => {
          this.playlists = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  setActivePlaylist(playlist: Playlist, index: number): void {
    this.currentPlaylist = playlist;
    this.currentIndex = index;
  }

  searchName(): void {
    this.currentPlaylist = {};
    this.currentIndex = -1;

    this.playlistService.findByName(this.name)
      .subscribe({
        next: (data) => {
          this.playlists = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
