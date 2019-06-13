import {AlbumModel} from './album.model';

export class UserModel {
  constructor(public name: string,
              public albums: AlbumModel[]) {
  }
}
