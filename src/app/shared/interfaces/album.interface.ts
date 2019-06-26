import {ImageInterface} from './image.interface';

export class AlbumInterface {
  constructor(public userId: number,
              public id: number,
              public title: string,
              public firebase?: string) {
  }
}
