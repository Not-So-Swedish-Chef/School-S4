import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor(private activeroute : ActivatedRoute) { }

  ngOnInit() {
    let data = this.activeroute.snapshot.queryParams;
    console.log(data);

    this.activeroute.queryParams.subscribe(
      data => { console.log(data); }
    );
  }

}
