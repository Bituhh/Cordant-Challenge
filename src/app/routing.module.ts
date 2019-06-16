import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {AlbumDetailsComponent} from './user-details/album-details/album-details.component';
import {ProfileComponent} from './profile/profile.component';
import {ImageDetailsComponent} from './profile/image-details/image-details.component';

const appRouting: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {
    path: 'users', component: UserListComponent, children: [
      {path: ':id', component: UserDetailsComponent},
    ]
  },
  {path: 'profile', component: ProfileComponent, children: [
      {path: ':id', component: ImageDetailsComponent},
      {path: ':id/edit', component: ImageDetailsComponent},
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
