import { Component, OnInit } from '@angular/core';
import { data_summary } from 'src/assets/data/summary';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss'],
})
export class UpdatesComponent  implements OnInit {
  summary_data : any;

  constructor() { }

  ngOnInit() { this.summary_data = data_summary; }

}
