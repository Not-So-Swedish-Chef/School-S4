import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngclass';

  homeData = { class: `SYST35300`, desc: `Hybrid Mobile Dev`};

  myMsg = { fName: '', lName: '' };
  getMsg($event: any) {
    this.myMsg = $event;
  }
}
