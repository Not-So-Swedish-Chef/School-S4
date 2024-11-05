import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SMessageService {
  private messages : { date : string , message : string }[] = [];

  constructor() { }

  addMessage(date : string , message : string) : void {
    this.messages.push({date, message});
  }

  getMessages(): { date: string, message: string }[] {
    return this.messages;
  }

  deleteMessage(index : number) : void {
    if (index > -1 ) {
      this.messages.splice(index, 1);
    }
  }
}
