import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router : Router) {}

  goPage2() {
    let qData={queryParams:{title:'Query Params',from:'From tab3'}};
    let qData2='title=Query Params&from=From tab3&method=ByUrl';

    this.router.navigate(['/page2',qData])
        .then(
          nav => { console.log(nav); },
          err => { console.log(err); }
        );
  }

  goPage3() {
    let sData={title:'State Property navigate',from:'From tab3'};
    let sData2={title:'State Property ByUrl',from:'From tab3'};

    this.router.navigate(['/page3',{state:sData}])
        .then(
          nav => { console.log(nav); },
          err => { console.log(err); }
        );
  }
}
