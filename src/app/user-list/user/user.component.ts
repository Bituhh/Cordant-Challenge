import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../shared/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('userData') user: UserModel;
  @Input('index') index: UserModel;

  constructor() {
  }

  ngOnInit() {
  }

}
