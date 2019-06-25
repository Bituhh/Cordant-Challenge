import {UserInterface} from './user.interface';
import {AlbumInterface} from './album.interface';
import {Injectable} from '@angular/core';
import {ImageInterface} from './image.interface';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataService {

  users: UserInterface[];
  albums: AlbumInterface[];

  constructor(private http: HttpClient) {
    this.getUsers().subscribe((users: UserInterface[]) => this.users = users);
  }

  getUser(userId: number): Observable<UserInterface> {
    return this.http.get<UserInterface>('https://jsonplaceholder.typicode.com/users/' + userId);
  }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('https://jsonplaceholder.typicode.com/users');
  }

  getAlbum(albumId: number): Observable<AlbumInterface> {
    return this.http.get<AlbumInterface>('https://jsonplaceholder.typicode.com/albums/' + albumId);
  }

  getAlbums(userId): Observable<AlbumInterface[]> {
    return this.http.get<AlbumInterface[]>('https://jsonplaceholder.typicode.com/albums')
      .pipe(map((albums: AlbumInterface[]) => {
          return albums.filter((album: AlbumInterface) => album.userId === +userId);
        })
      );
  }

  getImages(albumId: number): Observable<ImageInterface[]> {
    return this.http.get<ImageInterface[]>('https://jsonplaceholder.typicode.com/photos')
      .pipe(map((images: ImageInterface[]) => {
          return images.filter((image: ImageInterface) => image.albumId === +albumId);
        })
      );
  }

  // updateAlbum(userIndex: number, albumIndex: number, album: AlbumInterface): AlbumInterface {
  //   return this.users[userIndex].albums[albumIndex] = album;
  // }
  //
  // addAlbum(userIndex: number, album: AlbumInterface): number {
  //   this.users[userIndex].albums.push(album);
  //   return this.users[userIndex].albums.length - 1;
  // }

  // addImage(userIndex: number, albumName: string, image: ImageInterface): void {
  //   this.users[userIndex].albums.find(
  //     (album: AlbumInterface) => {
  //       return album.name === albumName;
  //     }
  //   ).images.push(image);
  // }
}
