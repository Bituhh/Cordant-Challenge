import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import {RoutingModule} from './routing.module';
import {UserDetailsComponent} from './user-list/user-details/user-details.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {DropdownDirective} from './shared/dropdown.directive';
import {AlbumDetailsComponent} from './user-list/user-details/album-details/album-details.component';
import {ProfileComponent} from './profile/profile.component';
import {AlbumDefaultComponent} from './user-list/user-details/album-default/album-default.component';
import {ImageDetailsComponent} from './profile/image-details/image-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserDetailsComponent,
    AlbumDetailsComponent,
    AlbumDefaultComponent,
    ProfileComponent,
    ImageDetailsComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
