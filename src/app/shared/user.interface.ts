import {AlbumInterface} from './album.interface';
import {DataService} from './data.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {OnInit} from '@angular/core';

interface AddressInterface {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoInterface;
}

interface GeoInterface {
  lat: string;
  lng: string;
}

interface CompanyInterface {
  name: string;
  catchPhrase: string;
  bs: string;
}


export class UserInterface {
  constructor(public id: number,
              public name: string,
              public username: string,
              public email: string,
              public address?: AddressInterface,
              public phone?: string,
              public website?: string,
              public company?: CompanyInterface) {
  }
}
