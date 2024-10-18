import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrl: './c2.component.css'
})
export class C2Component {
  @Output() childMsg = new EventEmitter();
  c2Data = { fName: 'Andy', lName: 'Pak' };
  sendMsg() { this.childMsg.emit(this.c2Data); }

}
