import { Component } from '@angular/core';
import { NodeService } from '../services/node.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  outMsg: any = {msg: ''}; cId: any; wDay: any; prof: any;
constructor(private node: NodeService) { }
insert() {
const params = { cid: this.cId, wday: this.wDay,
prof: this.prof };
this.node.insert(params).subscribe({
next: (v:any) => { console.log(v),
this.outMsg = v; },
error: (e) => { console.error(e),
this.outMsg.msg = e.message; },
complete: () => console.info('Complete')
});
}

  retrieve() {
    const params = { cid: this.cId, wday: this.wDay, prof: this.prof };
    this.node.retrieve(params).subscribe({
      next: (v:any) => {
        console.log(v),
        this.outMsg = v;
      },
      error: (e) => {
        console.error(e),
        this.outMsg.msg = e.message;
      },
      complete: () => console.info('Complete')
    });
  }

}
