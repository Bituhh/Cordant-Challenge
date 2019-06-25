import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {UserInterface} from '../shared/interfaces/user.interface';
import {AlbumInterface} from '../shared/interfaces/album.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('inputNewAlbum') inputNewAlbum: ElementRef;
  albums: AlbumInterface[];
  selected: number;
  displayAddAlbum = false;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.data.subscribe( (data: Data) => {
      this.albums = data.albums;
    });
  }

  onEdit(index: number) {
    this.selected = index;
  }

  onToggleAddAlbum() {
    this.displayAddAlbum = !this.displayAddAlbum;
  }

  onAddAlbum() {
  //   if (this.inputNewAlbum.nativeElement.value) {
  //     this.displayAddAlbum = !this.displayAddAlbum;
  //     const album = new AlbumInterface(this.inputNewAlbum.nativeElement.value);
  //     const index = this.dataService.addAlbum(this.userIndex, album);
  //     this.router.navigate(['/profile', index]);
  //     this.inputNewAlbum.nativeElement.value = '';
  //   }
  }

  onCancel() {
  //   this.displayAddAlbum = !this.displayAddAlbum;
  //   this.inputNewAlbum.nativeElement.value = '';
  }
}
