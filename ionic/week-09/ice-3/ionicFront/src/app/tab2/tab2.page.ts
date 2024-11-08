import { Component } from '@angular/core';
import { NodeService } from '../services/node.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  outMsg: any = {msg: '', degree: ''};
  outMsg2: any = {msg: '', degree: ''};
  cel: any; fah: any;
  
  constructor(private node: NodeService) {}
  
  getcelsius() {
    const params = { degree: this.fah };
    this.node.fahrenheit(params).subscribe({
      next: (data:any) => {
        console.log(data),
        this.outMsg = data;
      },
      error: (e) => {
        console.error(e),
        this.outMsg.msg = e.message;
      },
      complete: () => console.info('Complete')
    });
  }

  getfahrenheit() {
    const params = { degree: this.cel };
    this.node.celsius(params).subscribe({
      next:(data:any) => {
        console.log(data),
        this.outMsg2 = data;
      },
      error:(e) => {
        console.error(e),
        this.outMsg2.msg = e.message;
      },
      complete:() => console.info('Complete')
    });
  }
}
