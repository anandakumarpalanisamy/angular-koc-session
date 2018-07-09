import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './compose-message.component.html',
  styles: [
    `:host {
      position: relative;
      bottom: 10%;
    }`
  ]
})
export class ComposeMessageComponent {

  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  details: string;
  message: string;
  sending = false;

  constructor(private router: Router) {}

  send() {
    this.sending = true;
    this.details = 'Sending message...';
    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    this.router.navigate([{ outlets: { popup: null } }]);
  }
}
