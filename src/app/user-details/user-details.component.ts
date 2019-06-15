import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UserModel} from '../shared/user.model';
import {UserService} from '../shared/user.service';
import {AlbumModel} from '../shared/album.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: UserModel;
  displayAlbum: AlbumModel;
  private viewMode: string;
  pages: number[];

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    this.viewMode = 'col-3';
    this.route.params.subscribe(
      (params: Params) => {
        this.user = this.userService.getUser(params.id as number);
        this.displayAlbum = this.user.albums[0];
        const pageSize = Math.floor(this.user.albums[0].images.length / 12) + 1;
        this.pages = [];
        for (let i = 0; i < pageSize; i++) {
          this.pages.push(i + 1);
        }
      }
    );
  }

  onSelect(albumIndex: number) {
    this.displayAlbum = this.user.albums[albumIndex];
  }

  onChangeView(mode: string) {
    this.viewMode = mode;
  }

  toggleViewMode() {
    return {
      'col-md-12': this.viewMode === 'col-1',
      'col-md-6': this.viewMode === 'col-2',
      'col-md-4': this.viewMode === 'col-3',
      'col-md-3': this.viewMode === 'col-4'
    };
  }

  getPage() {

  }
}
