import {ImageModel} from './image.model';

export class AlbumModel {
  itemPerPage = 12;
  currentPage = 1;

  constructor(public name: string, public albumCover: ImageModel, public images: ImageModel[]) {
  }
}
