import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor(private activeroute : ActivatedRoute) { }

  ngOnInit() {
    let data = this.activeroute.snapshot.data;
    console.log('Static Data: ',data);
  }

}
