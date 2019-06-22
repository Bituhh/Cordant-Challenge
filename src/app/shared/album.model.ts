import {ImageModel} from './image.model';

export class AlbumModel {
  constructor(public name: string, public images?: ImageModel[]) {
    if (!this.images) {
      console.log(this.images, 'within');
      this.images = [];
    }
  }
}
