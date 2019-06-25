import {Component, OnInit} from '@angular/core';
import {UserInterface} from '../shared/interfaces/user.interface';
import {ActivatedRoute, Data, Params} from '@angular/router';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {

  users: UserInterface[];

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe( (data: Data) => {
      this.users = data.users;
    });
  }
}
