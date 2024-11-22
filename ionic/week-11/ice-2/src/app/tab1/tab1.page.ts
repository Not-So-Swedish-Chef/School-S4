import { Component } from '@angular/core';
import { ExpressMongoService } from '../services/express-mongo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  outMsg: any;
  cId: any;
  wDay: any;
  prof: any;
  outRec: any = [];

  constructor(private mongo : ExpressMongoService) {}

  insert() {
    const params = {
      cid : this.cId,
      wday : this.wDay,
      prof : this.prof
    };
    this.mongo.insert(params).subscribe({
      next : (data : any) => {
        console.log(data);
        this.outMsg = 'Record Added.';
        this.outRec = [];
      },
      error : (e) => {
        console.error(e);
        this.outMsg = e.message;
      },
      complete : () => console.info('Complete')
    });
  }

  retrieve() {
    const params = { cid: this.cId };
    this.mongo.retrieve(params).subscribe({
      next : (data : any) => {
        console.log(data);
        this.outRec = data;
        this.outMsg = this.outRec.length + 'retrieved';
      },
      error : (e) => {
        console.error(e);
        this.outMsg = e.message;
      },
      complete : () => console.info('Complete')
    });
  }
}
