import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user-list/user/user.component';
import { HeaderComponent } from './header/header.component';
import {RoutingModule} from './routing.module';
import {UserDetailsComponent} from './user-details/user-details.component';
import {LimitLengthPipe} from './user-list/user/limit-length.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    UserListComponent,
    UserDetailsComponent,
    LimitLengthPipe,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
