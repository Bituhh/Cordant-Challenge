// import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// import {DataService} from '../shared/data.service';
// import {UserInterface} from '../shared/user.model';
// import {AlbumInterface} from '../shared/album.model';
// import {Router} from '@angular/router';
//
// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
//
//   @ViewChild('inputNewAlbum') inputNewAlbum: ElementRef;
//   activeUser: UserInterface;
//   userIndex = 0;
//   selected: number;
//   displayAddAlbum = false;
//
//   constructor(private dataService: DataService, private router: Router) {
//   }
//
//   ngOnInit() {
//     this.activeUser = this.dataService.getUser(this.userIndex);
//   }
//
//   onEdit(index: number) {
//     this.selected = index;
//   }
//
//   onToggleAddAlbum() {
//     this.displayAddAlbum = !this.displayAddAlbum;
//   }
//
//   onAddAlbum() {
//     if (this.inputNewAlbum.nativeElement.value) {
//       this.displayAddAlbum = !this.displayAddAlbum;
//       const album = new AlbumInterface(this.inputNewAlbum.nativeElement.value);
//       const index = this.dataService.addAlbum(this.userIndex, album);
//       this.router.navigate(['/profile', index]);
//       this.inputNewAlbum.nativeElement.value = '';
//     }
//   }
//
//   onCancel() {
//     this.displayAddAlbum = !this.displayAddAlbum;
//     this.inputNewAlbum.nativeElement.value = '';
//   }
// }
