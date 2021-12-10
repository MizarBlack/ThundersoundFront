import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { UserComponent } from './components/user/user.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { AddPlaylistComponent } from './components/playlist/add-playlist/add-playlist.component';
import { PlaylistDetailsComponent } from './components/playlist/playlist-details/playlist-details.component';
import { SearchComponent } from './components/search/search.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { AlbumComponent } from './components/album/album.component';
import { AddAlbumComponent } from './components/album/add-album/add-album.component';
import { AlbumDetailsComponent } from './components/album/album-details/album-details.component';
import { RegisterComponent } from '../register/register.component';
import {LoginComponent} from "../login/login.component";
import {BoardUserComponent} from "../rolePage/board-user/board-user.component";
import {BoardAdminComponent} from "../rolePage/board-admin/board-admin.component";
import {BoardModeratorComponent} from "../rolePage/board-mod/board-mod.component";
import {HomeComponent} from "../rolePage/home/home.component";

const routes: Routes = [
  {
  path: 'dashboard',
  component: WrapperComponent,
  children: [
      {
        path: 'main-page',
        component: MainPageComponent
      },
      {
        path: 'playlist',
        component: PlaylistComponent
      },
      {
        path: 'playlist/add',
        component: AddPlaylistComponent
      },
      {
        path: 'playlist/:id',
        component: PlaylistDetailsComponent
      },
      {
        path: 'album',
        component: AlbumComponent
      },
      {
        path: 'album/add',
        component: AddAlbumComponent
      },
      {
        path: 'album/:id',
        component: AlbumDetailsComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'track-list',
        component: TrackListComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'main-page/register',
        component: RegisterComponent
      },
      {
        path: 'main-page/login',
        component: LoginComponent
      },
      {
        path: 'main-page/userboard',
        component: BoardUserComponent
      },
      {
        path: 'main-page/modboard',
        component: BoardModeratorComponent
      },
      {
        path: 'main-page/adminboard',
        component: BoardAdminComponent
      },
      {
        path: 'main-page/homeboard',
        component: HomeComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'main-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
