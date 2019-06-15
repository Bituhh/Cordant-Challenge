import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user-list/user/user.component';
import { HeaderComponent } from './header/header.component';
import {RoutingModule} from './routing.module';
import {UserDetailsComponent} from './user-details/user-details.component';
import {LimitLengthPipe} from './user-list/user/limit-length.pipe';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {DropdownDirective} from './shared/dropdown.directive';
import {AlbumDetailsComponent} from './user-details/album-details/album-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    UserListComponent,
    UserDetailsComponent,
    AlbumDetailsComponent,
    LimitLengthPipe,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
