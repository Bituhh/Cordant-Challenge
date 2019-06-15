import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../shared/user.service';
import {ActivatedRoute, Params} from '@angular/router';
import {AlbumModel} from '../../shared/album.model';
import {ImageModel} from '../../shared/image.model';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  @Input() userIndex: number;
  private albumIndex: number;

  displayAlbum: AlbumModel;
  displayImages: ImageModel[];
  private displayImagesLimit = 12;
  private viewMode = 'col-3';

  currentPage = 1;
  maximumPage: number;
  pages = [];

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.userIndex = params.id as number;
        this.albumIndex = this.albumIndex ? this.albumIndex : 0;
        this.displayAlbum = this.userService.getAlbum(this.userIndex, this.albumIndex);
        this.maximumPage = Math.ceil(this.displayAlbum.images.length / this.displayImagesLimit);
        this.getPages(0);
      }
    );
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.albumIndex = params.album ? params.album : 0;
        this.displayAlbum = this.userService.getAlbum(this.userIndex, this.albumIndex);
        this.maximumPage = Math.ceil(this.displayAlbum.images.length / this.displayImagesLimit);
        this.getPages(0);
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

  getPages(index) {
    // Following pagination logic adapted form github https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
    // Some changes where made to adapt to TypeScript and code structure

    let c = this.pages[index];

    // if '...' is selected pick next page.
    if (c === '...') {
      const previousIndex = this.pages.findIndex(p => {
          return p === this.currentPage;
        }
      );
      c = previousIndex > index ? (this.pages[index + 1] - 1) : (this.pages[index - 1] + 1);
    }

    const delta = 2;
    const left = c - delta;
    const right = c + delta + 1;
    const range = [];
    let l;

    this.pages = [];

    for (let i = 1; i <= this.maximumPage; i++) {
      if (i === 1 || i === this.maximumPage || i >= left && i < right) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          this.pages.push(l + 1);
        } else if (i - l !== 1) {
          this.pages.push('...');
        }
      }
      this.pages.push(i);
      l = i;
    }

    this.currentPage = c;
    this.displayImages = this.displayAlbum.images.slice((c - 1) * this.displayImagesLimit, c * this.displayImagesLimit);
  }
}
