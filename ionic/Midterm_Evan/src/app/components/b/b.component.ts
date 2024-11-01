import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Data';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss'],
})
export class ComponentB implements OnInit {

  data!: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(value => {
      this.data = value;
    });
  }
}
