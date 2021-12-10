import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { UserComponent } from './components/user/user.component';
import { UserService } from '../_services/user.service';
import { PlaylistService } from '../service/playlist.service';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { AlbumService } from '../service/album.service';
import { AlbumComponent } from './components/album/album.component';
import { SearchComponent } from './components/search/search.component';
import { TrackService } from '../service/track.service';
import { TrackListComponent } from './components/track-list/track-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

import { AddAlbumComponent } from './components/album/add-album/add-album.component';
import { AlbumDetailsComponent } from './components/album/album-details/album-details.component';
import { AddPlaylistComponent } from './components/playlist/add-playlist/add-playlist.component';
import { PlaylistDetailsComponent } from './components/playlist/playlist-details/playlist-details.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { AuthInterceptor, authInterceptorProviders } from '../_helpers/auth.interceptor';

import { BoardAdminComponent } from "../rolePage/board-admin/board-admin.component";
import { BoardModeratorComponent } from "../rolePage/board-mod/board-mod.component";
import { BoardUserComponent } from "../rolePage/board-user/board-user.component";
import { HomeComponent } from "../rolePage/home/home.component";
import {TokenStorageService} from "../_services/token-storage.service";
import {AuthService} from "../_services/auth.service";


@NgModule({
  declarations: [
    WrapperComponent,
    MainPageComponent,
    UserComponent,
    PlaylistComponent,
    SearchComponent,
    TrackListComponent,
    AlbumComponent,
    AddAlbumComponent,
    AlbumDetailsComponent,
    AddPlaylistComponent,
    PlaylistDetailsComponent,
    RegisterComponent,
    LoginComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    //audio
    NgxAudioPlayerModule,

    // NG Material Modules
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    MatDatepickerModule
  ],
  providers: [
    AlbumService,
    TrackService,
    PlaylistService,
    UserService,
    authInterceptorProviders,
    TokenStorageService,
    AuthService
  ]
})
export class DashboardModule { }
