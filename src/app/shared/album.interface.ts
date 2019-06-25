import {DataService} from './data.service';
import {ImageInterface} from './image.interface';

export class AlbumInterface {
  constructor(public userId: number,
              public id: number,
              public title: string,
              private images?: ImageInterface[]) {
  }
}
