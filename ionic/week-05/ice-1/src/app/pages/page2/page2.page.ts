import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
  myMsg !: any;

  constructor(private serv : DataService) { }

  ngOnInit() {
    this.serv.asObserver_page.subscribe({
      next: (message) => { this.myMsg = message; },
      error: (err) => { console.log(err); },
      complete: () => {console.log('Done'); }
    });
  }

}
