import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Data';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss'],
})
export class ComponentA implements OnInit {

  data!: string;
  inputData: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(value => {
      this.data = value;
    });
  }

  updateData() {
    this.dataService.updateData(this.inputData);
  }
}