import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router : Router) {}

  goPage1() {
    let p1Data1 = {id : 'A1' , rank : 80 , comment : 'Optional Param'};
    let p1Data2 = 'id=A2;rank=100;comment=Optional Param ByUrl';

    this.router.navigate(['/page1', p1Data1])
        .then(
          nav => {console.log(nav); },
          err => {console.log(err); },
        );
  }
}
