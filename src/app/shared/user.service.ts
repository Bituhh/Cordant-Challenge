import {UserModel} from './user.model';
import {AlbumModel} from './album.model';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class UserService {
  private users: UserModel[] = [
    new UserModel(
      'User 1',
      [
        new AlbumModel('Album 1', ['http://image-url.com']),
        new AlbumModel('Album 2', ['http://image-url.com']),
        new AlbumModel('Album 3', ['http://image-url.com']),
        new AlbumModel('Album 4', ['http://image-url.com']),
        new AlbumModel('Album 5', ['http://image-url.com']),
      ]
    ),
    new UserModel(
      'User 2',
      [
        new AlbumModel('Album 1', ['http://image-url.com']),
        new AlbumModel('Album 2', ['http://image-url.com']),
        new AlbumModel('Album 3', ['http://image-url.com']),
        new AlbumModel('Album 4', ['http://image-url.com']),
        new AlbumModel('Album 5', ['http://image-url.com']),
      ]
    ),
    new UserModel(
      'User 3',
      [
        new AlbumModel('Album 1', ['http://image-url.com']),
        new AlbumModel('Album 2', ['http://image-url.com']),
        new AlbumModel('Album 3', ['http://image-url.com']),
        new AlbumModel('Album 4', ['http://image-url.com']),
        new AlbumModel('Album 5', ['http://image-url.com']),
      ]
    ),
    new UserModel(
      'User 4',
      [
        new AlbumModel('Album 1', ['http://image-url.com']),
        new AlbumModel('Album 2', ['http://image-url.com']),
        new AlbumModel('Album 3', ['http://image-url.com']),
        new AlbumModel('Album 4', ['http://image-url.com']),
        new AlbumModel('Album 5', ['http://image-url.com']),
      ]
    ),
    new UserModel(
      'User 5',
      [
        new AlbumModel('Album 1', ['http://image-url.com']),
        new AlbumModel('Album 2', ['http://image-url.com']),
        new AlbumModel('Album 3', ['http://image-url.com']),
        new AlbumModel('Album 4', ['http://image-url.com']),
        new AlbumModel('Album 5', ['http://image-url.com']),
      ]
    ),
  ];

  getUser(userIndex: number) {
    return this.users[userIndex];
  }

  getUsers(): UserModel[] {
    return this.users.slice();
  }

  addUser(user: UserModel): UserModel[] {
    this.users.push(user);
    return this.users.slice();
  }

  getAlgums(userIndex: number): AlbumModel[] {
    return this.users[userIndex].albums.slice();
  }

  addAlbum(userIndex: number, album: AlbumModel): void {
    this.users[userIndex].albums.push(album);
  }

  addImage(userIndex: number, albumName: string, imageUrl: string): void {
    this.users[userIndex].albums.find(
      (album: AlbumModel) => {
        return album.name === albumName;
      }
    ).images.push(imageUrl);
  }
}
