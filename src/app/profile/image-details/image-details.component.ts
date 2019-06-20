import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service';
import {UserModel} from '../../shared/user.model';
import {ActivatedRoute, Params} from '@angular/router';
import {AlbumModel} from '../../shared/album.model';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {

  userIndex = 0;
  activeUser: UserModel;
  activeAlbum = this.userService.getAlbum(this.userIndex, 0);
  mode: string = 'view';

  constructor(private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.activeUser = this.userService.getUser(this.userIndex);
    this.route.params.subscribe(
      (params: Params) => {
        this.activeAlbum = this.userService.getAlbum(this.userIndex, params.id as number);
      }
    );
  }
}
