import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.css'
})
export class C1Component {
  @Input() c1Data : any;
}
