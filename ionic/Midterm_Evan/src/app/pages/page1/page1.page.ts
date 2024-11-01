import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  title! : string;
  desc!  : string;
  param_r! : any;
  param_o! : any;


  constructor(private data : ActivatedRoute) { }

  ngOnInit() {
    this.title = this.data.snapshot.data['title'];
    this.desc = this.data.snapshot.data['desc'];

    this.param_r = this.data.snapshot.paramMap.get('param');
    this.param_o = this.data.snapshot.queryParamMap.get('optionalParam');
  }

}
