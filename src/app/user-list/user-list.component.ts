import {Component, OnInit} from '@angular/core';
import {UserModel} from '../shared/user.model';
import {UserService} from '../shared/user.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: UserModel[];
  isViewMode = false;

  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.route.params.subscribe(
      (params: Params) => {
        if (params.id) {
          this.isViewMode = true;
        } else {
          this.isViewMode = false;
        }
      }
    )
  }
}
