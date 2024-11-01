import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss'],
})
export class CompBComponent  implements OnInit {
  myMsg !: any;

  constructor(private serv : DataService) { }

  ngOnInit() {
    this.serv.asObserver.subscribe({
      next: (message) => { this.myMsg = message; },
      error: (err) => { console.log('Error is ${err}'); },
      complete: () => { console.log('Done'); }
    });
  }

}
