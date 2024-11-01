import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss'],
})
export class CompAComponent  implements OnInit {
  myMsg !: any;

  constructor(private serv : DataService) { }

  ngOnInit() {
    this.serv.asObserver.subscribe(
      message => { this.myMsg = message; }
    );
  }

  newMessage() { this.serv.setMessage(this.myMsg); }

}
