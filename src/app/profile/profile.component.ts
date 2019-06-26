import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {UserInterface} from '../shared/interfaces/user.interface';
import {AlbumInterface} from '../shared/interfaces/album.interface';
import {DataService} from '../shared/data.service';

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

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
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
    if (this.inputNewAlbum.nativeElement.value) {
      this.onToggleAddAlbum();
      const album: AlbumInterface = {
        userId: this.albums[0].userId,
        id: Math.ceil(Math.random() * 1000),
        title: this.inputNewAlbum.nativeElement.value
      };
      const index = this.dataService.addAlbum(album).subscribe(res => {
        album.firebase = res.name;
        this.albums.push(album);
      });
      this.router.navigate(['/profile', album.id], {queryParams: {firebase: album.firebase}});
      this.inputNewAlbum.nativeElement.value = '';
    }
  }



  onCancel() {
    //   this.displayAddAlbum = !this.displayAddAlbum;
    //   this.inputNewAlbum.nativeElement.value = '';
  }
}
