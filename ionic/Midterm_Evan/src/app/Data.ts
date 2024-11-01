import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSubject: BehaviorSubject<string> = new BehaviorSubject<string>('Initial Value');
  
  constructor() {}

  getData(): Observable<string> {
    return this.dataSubject.asObservable();
  }

  updateData(newData: string) {
    this.dataSubject.next(newData);
  }
}
