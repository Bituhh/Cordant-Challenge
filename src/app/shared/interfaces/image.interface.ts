export class ImageInterface {
  constructor(public albumId: number,
              public id: number,
              public title: string,
              public url: string,
              public thumbnailUrl: string,
              public firebase?: string) {
  }
}
