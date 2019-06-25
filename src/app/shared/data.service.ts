import {UserInterface} from './interfaces/user.interface';
import {AlbumInterface} from './interfaces/album.interface';
import {Injectable} from '@angular/core';
import {ImageInterface} from './interfaces/image.interface';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataService {
  constructor(private http: HttpClient) {
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
}
