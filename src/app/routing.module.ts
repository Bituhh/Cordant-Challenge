import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UserDetailsComponent} from './user-details/user-details.component';

const appRouting: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {
    path: 'users', component: UserListComponent, children: [
      {path: ':id', component: UserDetailsComponent},
    ]
  },
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
