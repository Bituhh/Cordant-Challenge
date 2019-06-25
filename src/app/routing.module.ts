import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserListComponent} from './user-list/user-list.component';
import {ProfileComponent} from './profile/profile.component';
import {UserDetailsComponent} from './user-list/user-details/user-details.component';
import {UserListResolver} from './user-list/user-list-resolver.service';
import {UserResolver} from './shared/resolvers/user-resolver.service';
import {AlbumsResolver} from './shared/resolvers/albums-resolver.service';
import {AlbumDefaultComponent} from './user-list/user-details/album-default/album-default.component';
import {AlbumDetailsComponent} from './user-list/user-details/album-details/album-details.component';
import {ImagesResolver} from './shared/resolvers/images-resolver.service';
import {ImageDetailsComponent} from './profile/image-details/image-details.component';
import {AlbumResolver} from './shared/resolvers/album-resolver.service';

const appRouting: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {
    path: 'users', component: UserListComponent, resolve: {users: UserListResolver}, children: [
      {
        path: ':id', component: UserDetailsComponent, resolve: {user: UserResolver, albums: AlbumsResolver}, children: [
          {path: '', component: AlbumDefaultComponent},
          {path: ':albumId', component: AlbumDetailsComponent, resolve: {images: ImagesResolver}}
        ]
      },
    ]
  },
  {path: 'profile', redirectTo: '/profile/1', pathMatch: 'full'},
  {path: 'profile/:id', component: ProfileComponent, resolve: {albums: AlbumsResolver}, children: [
      {path: ':albumId', component: ImageDetailsComponent, resolve: {album: AlbumResolver, images: ImagesResolver}}
    ]
  }
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRouting)
    ],
    exports: [
      RouterModule
    ]
  }
)
export class RoutingModule {
}
