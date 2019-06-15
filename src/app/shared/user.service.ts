import {UserModel} from './user.model';
import {AlbumModel} from './album.model';
import {Injectable} from '@angular/core';
import {ImageModel} from './image.model';

@Injectable({providedIn: 'root'})
export class UserService {
  private users: UserModel[] = [
    new UserModel(
      'User 1',
      [
        new AlbumModel('Album 1',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),


          ]
        ),
        new AlbumModel('Album 2',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
        new AlbumModel('Album 3',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
        new AlbumModel('Album 4',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
        new AlbumModel('Album 5',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),

      ]
    ),
    new UserModel(
      'User 2',
      [
        new AlbumModel('Album 1',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
        new AlbumModel('Album 2',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
        new AlbumModel('Album 3',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
        new AlbumModel('Album 4',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
        new AlbumModel('Album 5',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
      ]
    ),
    new UserModel(
      'User 3',
      [
        new AlbumModel('Album 1',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
        new AlbumModel('Album 2',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
        new AlbumModel('Album 3',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
        new AlbumModel('Album 4',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
        new AlbumModel('Album 5',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
      ]
    ),
    new UserModel(
      'User 4',
      [
        new AlbumModel('Album 1',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
        new AlbumModel('Album 2',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
        new AlbumModel('Album 3',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
        new AlbumModel('Album 4',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
        new AlbumModel('Album 5',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
      ]
    ),
    new UserModel(
      'User 5',
      [
        new AlbumModel('Album 1',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
        new AlbumModel('Album 2',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
        new AlbumModel('Album 3',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
        new AlbumModel('Album 4',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
        new AlbumModel('Album 5',
          new ImageModel('Cover', 'https://cdn.pixabay.com/photo/2015/03/26/09/48/sunset-690333__340.jpg'),
          [
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
            new ImageModel('Horizon', 'https://hdwallsource.com/img/2014/10/beautiful-images-40120-41056-hd-wallpapers.jpg'),
          ]
        ),
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

  getAlbums(userIndex: number): AlbumModel[] {
    return this.users[userIndex].albums.slice();
  }

  getAlbum(userIndex: number, albumIndex: number): AlbumModel {
    return this.users[userIndex].albums[albumIndex];
  }

  addAlbum(userIndex: number, album: AlbumModel): void {
    this.users[userIndex].albums.push(album);
  }

  addImage(userIndex: number, albumName: string, image: ImageModel): void {
    this.users[userIndex].albums.find(
      (album: AlbumModel) => {
        return album.name === albumName;
      }
    ).images.push(image);
  }
}
