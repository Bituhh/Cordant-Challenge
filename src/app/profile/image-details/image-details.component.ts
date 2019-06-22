import {Component, OnInit} from '@angular/core';
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
  albumIndex = 0;
  activeAlbum = this.userService.getAlbum(this.userIndex, this.albumIndex);
  isEditMode = false;

  constructor(private userService: UserService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeUser = this.userService.getUser(this.userIndex);
    this.route.params.subscribe(
      (params: Params) => {
        this.albumIndex = params.id as number;
        this.activeAlbum = this.userService.getAlbum(this.userIndex, this.albumIndex);
        this.isEditMode = false;
      }
    );
  }

  toggleRename() {
    this.isEditMode = !this.isEditMode;
  }

  onRename(value: string) {
    if (value) {
      this.activeAlbum.name = value;
      this.userService.updateAlbum(this.userIndex, this.albumIndex, this.activeAlbum);
      this.toggleRename();
    }
  }
}
