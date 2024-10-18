import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/getdata.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  constructor(private ldData : GetdataService) { }

  ngOnInit() {
  }

  addItem() {
    this.ldData.setData('a1', 'This is a1');
    console.log(`added: ${this.ldData.getData('a1')}`);
  }

  retrieveItem() {
    console.log(`retrieved: ${this.ldData.getData('a1')}`);
  }

  deleteItem() {
    console.log(`removing: ${this.ldData.getData('a1')}`);
    this.ldData.removeData('a1');
    console.log(`removed`);
  }
}
