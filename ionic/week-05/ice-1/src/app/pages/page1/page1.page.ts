import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
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
