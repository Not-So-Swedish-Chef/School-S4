import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../app/data.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss'],
})
export class AComponent  implements OnInit {
  myMsg! : any;

  constructor(private serv : DataService) { }

  ngOnInit() {
    this.serv.asObserver.subscribe(
      message => { this.myMsg = message }
    );
  }

  newMessage() { this.serv.setMessage(this.myMsg); }

}
