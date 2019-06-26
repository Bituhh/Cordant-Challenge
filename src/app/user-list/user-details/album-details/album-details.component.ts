import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../../shared/data.service';
import {ActivatedRoute, Data} from '@angular/router';
import {AlbumInterface} from '../../../shared/interfaces/album.interface';
import {ImageInterface} from '../../../shared/interfaces/image.interface';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  @Input() album: AlbumInterface;
  images: ImageInterface[];
  displayImages: ImageInterface[];
  private viewMode = 'col-3';

  private displayImagesLimit = 12;
  currentPage = 0;
  maximumPage: number;
  pages = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.images = data.images;
      this.maximumPage = Math.ceil(this.images.length / this.displayImagesLimit);
      this.displayImages = this.images.slice(0, this.displayImagesLimit);
      this.currentPage = 0;
      this.getPages(this.currentPage);
    });
  }

  onViewImage() {
    console.log(this.images);
    // Call modal service
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

    let c: any = 1;
    if (this.pages.length > 0) {
      c = this.pages[index];
    }

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
    this.displayImages = this.images.slice((c - 1) * this.displayImagesLimit, c * this.displayImagesLimit);
  }
}
