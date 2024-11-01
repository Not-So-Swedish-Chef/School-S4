import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  myMsg !: any;

  constructor(private serv : DataService) {}

  setData() { this.serv.tab2(this.myMsg); }
}
