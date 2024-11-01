import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page1Page implements OnInit {
  myMsg! : any;

  constructor(private serv : DataService) { }

  ngOnInit() {
    this.serv.asObserver_page.subscribe({
      next : (message) => { this.myMsg = message; },
      error : (err)=> { console.log(`Error is ${err}.`);},
      complete : ()=> { console.log('Done'); }
    });
  }

}
