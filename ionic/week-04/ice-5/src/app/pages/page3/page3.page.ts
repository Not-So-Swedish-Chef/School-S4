import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    let data = this.router.getCurrentNavigation()?.extras.state;
    console.log('State Property', data);

    const state = history.state;
    console.log('History:', state);
  }

}
