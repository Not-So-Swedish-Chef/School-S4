import { Component, OnInit } from '@angular/core';
import { data_status } from 'src/assets/data/status';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent  implements OnInit {
  status_data : any;
  
  constructor() { }

  ngOnInit() { this.status_data = data_status; }

}
