import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router : Router) {}

  goPage2() {
    this.router.navigate(['/page2'])
        .then(
          nav => { console.log(nav); },
          err => { console.log(err); }
        );
  }
}
