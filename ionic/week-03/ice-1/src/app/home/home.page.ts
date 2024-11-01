import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router : Router) {}

  goPage1() {
    this.router.navigate(['/page1'])
        .then(
          nav => { console.log(nav); },
          err => { console.log(err); }
        );
  }

  goPage2() {
    this.router.navigate(['/page2'])
        .then(
          nav => { console.log(nav); },
          err => { console.log(err); }
        );
  }

}
