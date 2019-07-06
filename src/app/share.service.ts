import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private messageSource = new BehaviorSubject({});
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  changeMessage(msg: string) {
    this.messageSource.next(msg);
  }
}
