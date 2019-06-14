import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../shared/user.model';
import {AlbumModel} from '../../shared/album.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: UserModel;
  @Input() index: UserModel;
  description: string;

  constructor() {
  }

  ngOnInit() {
    const temp = [];
    this.user.albums.forEach(
      (album: AlbumModel) => {
        temp.push(album.name as string);
      }
    );
    this.description = temp.join(', ');
  }
}
