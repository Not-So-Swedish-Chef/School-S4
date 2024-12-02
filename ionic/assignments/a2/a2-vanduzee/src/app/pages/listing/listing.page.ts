import { Component, OnInit } from '@angular/core';
import { ExpressMongoService } from 'src/app/services/express-mongo.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  items : any[] = [];
  isInit : boolean = false;

  constructor(private mongoService : ExpressMongoService) { }

  ngOnInit() {
    this.checkDbStatus();
  }

  private checkDbStatus() {
    this.isInit = !!localStorage.getItem('dbName');
    if(this.isInit) {
      this.loadItems();
    }
  }

  private loadItems() {
    this.mongoService.retrieve({}).subscribe(
      (response : any) => {
        console.log(response);
        this.items = response;
      },
      (error) => {
        console.error(error);
        alert('Error retrieving items from the database');
      }
    );
  }

}
