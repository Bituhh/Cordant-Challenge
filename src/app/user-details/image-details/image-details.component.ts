import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (parms: Params) => {
        this.userService.getAlgums()
      }
    );
  }

}
