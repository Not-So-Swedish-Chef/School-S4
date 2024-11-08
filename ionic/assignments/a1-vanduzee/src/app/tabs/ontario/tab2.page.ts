import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { SMessageService } from 'src/app/services/s-message.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public entries: any[] = [];
  public messages: { date : string , message : string }[] = [];

  constructor(
      private http: HttpClient,
      private router: Router,
      private message_services : SMessageService,
      private alert_controller : AlertController
    ) {}

  ngOnInit(): void {
    this.messages = this.message_services.getMessages();
    this.http.get<{ records: any[][] }>('/assets/data/data-vaccine.json')
      .subscribe(data => {
        this.entries = data.records
          .map((record: any[]) => {
            const dateString = record[1].replace(/ : /g, ':');
            return {
              id: record[0],
              report_date: formatDate(new Date(dateString), 'MMMM dd, yyyy', 'en-US')
            };
          })
          .reverse();
      }
    );
  }

  viewDetails(entry: any): void {
    this.router.navigate(['/report', entry.id]);
  }

  async confirmDelete(index: number) {
    const alert = await this.alert_controller.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this message?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Delete cancelled');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.message_services.deleteMessage(index);
            this.messages = this.message_services.getMessages();
          }
        }
      ]
    });

    await alert.present();
  }
}
