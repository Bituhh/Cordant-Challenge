import {Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {take} from 'rxjs/operators';
import {ImageModel} from '../../shared/image.model';

@Injectable({providedIn: 'root'})
export class ModalService {

  alertToggler = new Subject<{ title: string, body: string }>();

  confirmToggler = new Subject<{ title: string, body: string }>();
  private confirmResponse = new Subject<boolean>();

  renameToggler = new Subject<string>();
  private renameResponse = new Subject<string>();

  editToggler = new Subject<ImageModel>();
  private editResponse = new Subject<ImageModel>();

  displayToggler = new Subject<ImageModel>();


  constructor() {
  }

  alert(alertTitle: string, alertBody: string): void {
    this.alertToggler.next({title: alertTitle, body: alertBody});
  }

  confirm(confirmTitle: string, confirmBody: string): Observable<boolean> {
    this.confirmToggler.next({title: confirmTitle, body: confirmBody});
    return this.confirmResponse.pipe(take(1));
  }

  rename(currentValue?: string): Observable<string> {
    if (currentValue) {
      this.renameToggler.next(currentValue);
    } else {
      this.renameToggler.next('');
    }
    return this.renameResponse.pipe(take(1));
  }

  display(image: ImageModel) {
    this.displayToggler.next(image);
  }

  edit(image?: ImageModel): Observable<ImageModel> {
    if (image) {
      this.editToggler.next(image);
    } else {
      this.editToggler.next(new ImageModel('', ''));
    }
    return this.editResponse.pipe(take(1));
  }
}
