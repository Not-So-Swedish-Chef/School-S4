import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  message = new BehaviorSubject<any>('');
  asObserver = this.message.asObservable();
  setMessage(msg: any) { this.message.next(msg); }


  msg2 = new BehaviorSubject<any>('');
  asObserver_page = this.msg2.asObservable();
  tab2(msg: any) { this.msg2.next(msg); }
}
