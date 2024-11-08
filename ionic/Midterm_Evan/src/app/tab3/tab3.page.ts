import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router) {}

  goToPage2WithQueryParam() {
    this.router.navigate(['page2'], {
      queryParams: { queryParam: 'Source is Query' }
    });
  }

  goToPage3WithStateParam() {
    this.router.navigate(['page3'], {
      state: { stateData: 'Source is State' }
    });
  }
}
