import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {AlbumInterface} from '../album.interface';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AlbumsResolver implements Resolve<AlbumInterface[]> {
  constructor(private dataService: DataService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot
  ): Observable<AlbumInterface[]> | Promise<AlbumInterface[]> | AlbumInterface[] {
    return this.dataService.getAlbums(+route.params.id);
  }
}
