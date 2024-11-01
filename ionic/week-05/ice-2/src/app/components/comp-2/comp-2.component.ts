import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comp-2',
  templateUrl: './comp-2.component.html',
  styleUrls: ['./comp-2.component.scss'],
})
export class Comp2Component  implements OnInit {
  message !: any;

  constructor(private sharedService : DataService) { }

  ngOnInit() {
    this.sharedService.asObserver.subscribe(
      shmessage => { this.message = shmessage; }
    );
  }

  @Output() childMsg = new EventEmitter();
  sendMessage() { this.childMsg.emit(this.message + ' from comp-2') }
}
