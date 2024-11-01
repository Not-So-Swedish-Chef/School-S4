import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-comp-1',
  templateUrl: './comp-1.component.html',
  styleUrls: ['./comp-1.component.scss'],
})
export class Comp1Component  implements OnInit {
  @Input() c1Input : any;

  constructor(private sharedService : DataService) { }

  ngOnInit() {}

  newMessage() { this.sharedService.setMessage(this.c1Input); }

}
