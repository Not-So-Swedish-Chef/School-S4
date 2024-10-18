import { Component, OnInit } from '@angular/core';
import { Pdata } from 'src/app/pData';
import { GetdataService } from 'src/app/getdata.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
  myData! : Pdata;

  constructor(private ldData: GetdataService) { }

  loadMyData() : void {
    this.myData = this.ldData.loadData();
  }

  ngOnInit() {
    this.loadMyData();
  }
}
