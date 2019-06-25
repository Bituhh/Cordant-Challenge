// import {Component, OnInit} from '@angular/core';
// import {DataService} from '../../shared/data.service';
// import {UserInterface} from '../../shared/user.model';
// import {ActivatedRoute, Params} from '@angular/router';
// import {AlbumInterface} from '../../shared/album.model';
// import {ImageInterface} from '../../shared/image.model';
// import {del} from 'selenium-webdriver/http';
//
// @Component({
//   selector: 'app-image-details',
//   templateUrl: './image-details.component.html',
//   styleUrls: ['./image-details.component.css']
// })
// export class ImageDetailsComponent implements OnInit {
//
//   userIndex = 0;
//   albumIndex = 0;
//
//   displayAlbum: AlbumInterface;
//   displayImages: ImageInterface[];
//   isEditMode = false;
//
//   pages: any[] = [];
//   currentPage = 0;
//   maximumPage: number;
//   private displayImagesLimit = 12;
//
//
//   constructor(private dataService: DataService,
//               private route: ActivatedRoute) {
//   }
//
//   ngOnInit() {
//     this.route.params.subscribe(
//       (params: Params) => {
//         this.albumIndex = params.id as number;
//         this.displayAlbum = this.dataService.getAlbum(this.userIndex, this.albumIndex);
//         this.currentPage = 0;
//         this.displayImages = this.displayAlbum.images.slice(this.currentPage, this.displayImagesLimit);
//         this.maximumPage = Math.ceil(this.displayAlbum.images.length / this.displayImagesLimit);
//         this.isEditMode = false;
//         this.getPages(this.currentPage);
//       }
//     );
//   }
//
//   toggleRename() {
//     this.isEditMode = !this.isEditMode;
//   }
//
//   onRename(value: string) {
//     if (value) {
//       this.displayAlbum.name = value;
//       this.dataService.updateAlbum(this.userIndex, this.albumIndex, this.displayAlbum);
//       this.toggleRename();
//     }
//   }
//
//   getHeight(): string {
//     return this.displayImages.length > 0 ? '100%' : '200px';
//   }
//
//   getPages(index: any) {
//     // Following pagination logic adapted form github https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
//     // Some changes where made to adapt to TypeScript and code structure
//     let c: any = 1;
//     if (this.pages.length > 0) {
//       c = this.pages[index];
//     }
//
//     // if '...' is selected pick next page.
//     if (c === '...') {
//       const previousIndex = this.pages.findIndex(p => {
//           return p === this.currentPage;
//         }
//       );
//       c = previousIndex > index ? (this.pages[index + 1] - 1) : (this.pages[index - 1] + 1);
//     }
//
//     const delta = 2;
//     const left = c - delta;
//     const right = c + delta + 1;
//     const range = [];
//     let l;
//
//     this.pages = [];
//
//     for (let i = 1; i <= this.maximumPage; i++) {
//       if (i === 1 || i === this.maximumPage || i >= left && i < right) {
//         range.push(i);
//       }
//     }
//
//     for (const i of range) {
//       if (l) {
//         if (i - l === 2) {
//           this.pages.push(l + 1);
//         } else if (i - l !== 1) {
//           this.pages.push('...');
//         }
//       }
//       this.pages.push(i);
//       l = i;
//     }
//     console.log(this.pages);
//     this.currentPage = c;
//     console.log(c);
//     this.displayImages = this.displayAlbum.images.slice((c - 1) * this.displayImagesLimit, c * this.displayImagesLimit);
//   }
// }
