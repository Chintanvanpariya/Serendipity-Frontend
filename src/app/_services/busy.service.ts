import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  busyRequestCount = 0;

  constructor(
    private spinnerService: NgxSpinnerService
  ) { }

  busy() {
    this.busyRequestCount++;
    this.spinnerService.show(undefined, {
      type: 'ball-zig-zag-deflect',
      bdColor: 'rgba(100,100,100,0.5)',
      color: '#ff00a1',
      size : "default"
    })
  }

  idle() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
  }

}
