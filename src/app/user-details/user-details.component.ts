import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserModel} from '../shared/user.model';
import {UserService} from '../shared/user.service';
import {AlbumModel} from '../shared/album.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userIndex: number;
  user: UserModel;
  private viewMode: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    this.viewMode = 'col-3';
    this.route.params.subscribe(
      (params: Params) => {
        this.userIndex = params.id as number;
        this.user = this.userService.getUser(this.userIndex);
      }
    );
  }

  onSelect(albumIndex: number) {
    this.router.navigate(['/users', this.userIndex], {queryParams: {album: albumIndex}});
  }
}
