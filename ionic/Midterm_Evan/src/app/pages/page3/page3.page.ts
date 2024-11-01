import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  stateData!: string;  // To store the state data

  constructor(private router: Router) { }

  ngOnInit() {
    // Access the state data passed during navigation using bracket notation
    const navigation = this.router.getCurrentNavigation();
    this.stateData = navigation?.extras.state?.['stateData'] || 'No state data';
  }

}
