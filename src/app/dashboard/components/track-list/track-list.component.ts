import { Component, OnInit, ViewChild } from '@angular/core';

import { Track } from 'ngx-audio-player'
import { AudioPlayerComponent } from 'ngx-audio-player';

import { Tracks } from "../../../models/track.model";
import { TrackService } from "../../../service/track.service";

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {

  @ViewChild('player', { static: false })
  advancedPlayer!: AudioPlayerComponent;

  playlist: Track[] = [ ];

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  pageSizeOptions = [5, 10];

  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = true;
  msaapDisplayDuration = true;
  msaapDisablePositionSlider = false;

  msaapTableHeader = 'Playlist';
  msaapTitleHeader = 'Track';
  msaapArtistHeader = 'Author';
  msaapDurationHeader = 'Duration';

  currentTrack: Track = null as any;
  currentTime: any;

  appendTracksToPlaylistDisable = false;
  counter = 1;

  logCurrentTrack() {
    this.advancedPlayer.audioPlayerService.getCurrentTrack().subscribe(track => {
      this.currentTrack = track;
    });
  }

  logCurrentTime() {
    this.advancedPlayer.audioPlayerService.getCurrentTime().subscribe(time => {
      this.currentTime = time;
    });
  }

  consoleLogCurrentData() {
    console.log(this.currentTrack.title + ' : ' + this.currentTime);
  }

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.trackService.getAll().subscribe(data =>
      data.map(t => {
        const track = new Track();
        track.title = t.name!;
        track.link = `http://localhost:8081/track/${t.id}/download`;
        this.playlist.push(track);
        return track;
      }));
  }

}
