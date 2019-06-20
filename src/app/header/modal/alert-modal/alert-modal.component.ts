import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from '../modal.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit, OnDestroy {

  display = false;
  title: string;
  body: string;

  subscriptions = new Subscription();

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
    this.subscriptions.add(
      this.modalService.alertToggler.subscribe(
        modal => {
          this.display = true;
          this.title = modal.title;
          this.body = modal.body;
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
