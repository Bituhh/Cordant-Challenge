import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../shared/user.service';
import {ActivatedRoute, Params} from '@angular/router';
import {AlbumModel} from '../../shared/album.model';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  @Input() userIndex: number;
  albumIndex: number;
  displayAlbum: AlbumModel;
  viewMode = 'col-3';

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.userIndex = params.id as number;
        this.albumIndex = this.albumIndex ? this.albumIndex : 0;
        this.displayAlbum = this.userService.getAlbum(this.userIndex, this.albumIndex);
      }
    );
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.albumIndex = params.album ? params.album : 0;
        this.displayAlbum = this.userService.getAlbum(this.userIndex, this.albumIndex);
      }
    );
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
}
