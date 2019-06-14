import {ImageModel} from './image.model';

export class AlbumModel {
  constructor(public name: string, public images: ImageModel[]) {
  }
}
