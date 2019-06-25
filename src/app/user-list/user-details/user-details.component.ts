import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {UserInterface} from '../../shared/user.interface';
import {DataService} from '../../shared/data.service';
import {AlbumInterface} from '../../shared/album.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: UserInterface;
  albums: AlbumInterface[];
  private viewMode: string;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.viewMode = 'col-3';
    this.route.data.subscribe((data: Data) => {
      this.user = data.user;
      this.albums = data.albums;
    });
  }

  onSelect(albumId: number) {
    this.router.navigate([albumId], {relativeTo: this.route});
  }
}
