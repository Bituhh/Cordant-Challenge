import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {DataService} from '../data.service';
import {UserInterface} from '../user.interface';

@Injectable({providedIn: 'root'})
export class UserResolver implements Resolve<UserInterface> {
  constructor(private dataService: DataService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot
  ): Observable<UserInterface> | Promise<UserInterface> | UserInterface {
    return this.dataService.getUser(+route.params.id);
  }
}
