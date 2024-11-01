import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  query!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.query = this.route.snapshot.queryParamMap.get('queryParam') || 'No query parameter';
  }

}

