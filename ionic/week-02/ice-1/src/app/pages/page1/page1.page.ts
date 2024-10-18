import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  man: Man = {
    f_name: '',
    l_name: '',
    n_name: ''
  }

  constructor() {

  }

  ngOnInit() {

  }

}

interface Man {
  f_name: string;
  l_name: string;
  n_name: string;
}
