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
    return this.getUsers().pipe(map((users: UserInterface[]) => {
        return users.find(user => user.id === userId);
      })
    );
  }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('https://cordantchallenge.firebaseio.com/users.json')
      .pipe(map(res => {
        const temp: UserInterface[] = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            temp.push({...res[key], firebase: key});
          }
        }
        return temp;
      }));
  }

  getAlbum(albumId: string): Observable<AlbumInterface> {
    return this.http.get<AlbumInterface>('https://cordantchallenge.firebaseio.com/albums/' + albumId + '.json');
  }

  getAlbums(userId): Observable<AlbumInterface[]> {
    return this.http.get<AlbumInterface[]>('https://cordantchallenge.firebaseio.com/albums.json')
      .pipe(map(res => {
          const temp: AlbumInterface[] = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              temp.push({...res[key], firebase: key});
            }
          }
          return temp.filter(album => album.userId === userId);
        })
      );
  }

  getImages(albumId: number): Observable<ImageInterface[]> {
    return this.http.get<ImageInterface[]>('https://cordantchallenge.firebaseio.com/photos.json')
      .pipe(map(res => {
          const temp: ImageInterface[] = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              temp.push({...res[key], firebase: key});
            }
          }
          return temp.filter(image => image.albumId === albumId);
        })
      );
  }

  addAlbum(album: AlbumInterface): Observable<{ name: string }> {
    return this.http.post<{ name: string }>('https://cordantchallenge.firebaseio.com/albums.json', album);
  }

  deleteAlbum(firebaseId: string) {
    return this.http.delete('https://cordantchallenge.firebaseio.com/albums' + firebaseId + '.json');
  }
}
