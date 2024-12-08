import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpressMongoService } from 'src/app/services/express-mongo.service';

@Component({
  selector : 'app-update',
  templateUrl : './update.page.html',
  styleUrls : ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  itemId : string = '';
  item : any = { question : '', answer : ''};

  constructor(private route : ActivatedRoute, private mongoService : ExpressMongoService) {}

  ngOnInit() {
    // Get the _id from the route parameters
    this.route.params.subscribe((params) => {
      this.itemId = params['id']; // Matches '/pages/update/:id' in route config
    });
    this.mongoService.retrieve({ _id : this.itemId }).subscribe(
      (response : any) => {
        this.item = response[0];
      },
      (error) => {
        this.item = null;
      }
    );
  }

  // Update the item
  updateItem() {
    this.mongoService.update({ _id : this.itemId, ...this.item }).subscribe(
      (response) => {
        alert('Item updated successfully.');
      },
      (error) => {
        console.error(error);
        alert('Error updating item.');
      }
    );
  }

  // Delete the item
  deleteItem() {
    if (confirm('Are you sure you want to delete this item?')) {
      this.mongoService.remove({ _id : this.itemId }).subscribe(
        (response) => {
          alert('Item deleted successfully.');
        },
        (error) => {
          console.error(error);
          alert('Error deleting item.');
        }
      );
    }
  }
}
