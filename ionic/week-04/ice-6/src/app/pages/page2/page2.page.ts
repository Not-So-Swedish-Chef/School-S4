import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  goPage3() {
    let sData = { title:'State Property navigate',from:'From Page 2'};

    this.router.navigate(['/page3'],{state: sData})
        .then(
          nav => { console.log(nav); },
          err => { console.log(err); }
        );
  }

}
