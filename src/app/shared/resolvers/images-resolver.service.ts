import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {DataService} from '../data.service';
import {ImageInterface} from '../image.interface';

@Injectable({providedIn: 'root'})
export class ImagesResolver implements Resolve<ImageInterface[]> {
  constructor(private dataService: DataService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot
  ): Observable<ImageInterface[]> | Promise<ImageInterface[]> | ImageInterface[] {
    return this.dataService.getImages(+route.params.albumId);
  }
}
