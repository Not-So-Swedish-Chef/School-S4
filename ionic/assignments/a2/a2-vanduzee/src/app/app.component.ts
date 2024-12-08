import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Main', url: '/pages/main', icon: 'home-outline' },
    { title: 'Listing', url: '/pages/listing', icon: 'list-outline' },
    { title: 'Update', url: '/pages/update', icon: 'stats-chart-outline' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
