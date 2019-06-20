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
import {ProfileComponent} from './profile/profile.component';
import {ImageDetailsComponent} from './profile/image-details/image-details.component';
import {ModalComponent} from './header/modal/modal.component';
import {ConfirmModalComponent} from './header/modal/confirm-modal/confirm-modal.component';
import {AlertModalComponent} from './header/modal/alert-modal/alert-modal.component';
import {EditModalComponent} from './header/modal/edit-modal/edit-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    UserListComponent,
    UserDetailsComponent,
    AlbumDetailsComponent,
    ProfileComponent,
    ImageDetailsComponent,
    LimitLengthPipe,
    DropdownDirective,
    ModalComponent,
    ConfirmModalComponent,
    AlertModalComponent,
    EditModalComponent,
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
