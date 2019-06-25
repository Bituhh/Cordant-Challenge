import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {UserInterface} from '../shared/user.interface';
import {Observable} from 'rxjs';
import {DataService} from '../shared/data.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class UserListResolver implements Resolve<UserInterface[]> {
  constructor(private dataService: DataService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot
  ): Observable<UserInterface[]> | Promise<UserInterface[]> | UserInterface[] {
    return this.dataService.getUsers();
  }
}
