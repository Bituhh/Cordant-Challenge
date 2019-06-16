import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../shared/user.service';
import {UserModel} from '../shared/user.model';
import {AlbumModel} from '../shared/album.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('inputNewAlbum') inputNewAlbum: ElementRef;
  activeUser: UserModel;
  userIndex = 0;
  selected: number;
  displayAddAlbum = false;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.activeUser = this.userService.getUser(this.userIndex);
  }

  onEdit(index: number) {
    this.selected = index;
  }

  onToggleAddAlbum() {
    this.displayAddAlbum = !this.displayAddAlbum;
  }

  onAddAlbum() {
    if (this.inputNewAlbum.nativeElement.value) {
      this.displayAddAlbum = !this.displayAddAlbum;
      const album = new AlbumModel(this.inputNewAlbum.nativeElement.value);
      const index = this.userService.addAlbum(this.userIndex, album);
      this.router.navigate(['/profile', index]);
      this.inputNewAlbum.nativeElement.value = '';
    }
  }

  onCancel() {
    this.displayAddAlbum = !this.displayAddAlbum;
    this.inputNewAlbum.nativeElement.value = '';
  }
}
