import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SMessageService } from '../../services/s-message.service';
import { DatePipe } from '@angular/common';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss']
})
export class ReportPage implements OnInit {
  public entry: any = null;
  public user_message: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private date_pipe : DatePipe,
    private message_service : SMessageService,
    private alert_controller : AlertController
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.http.get<{ records: any[][] }>('/assets/data/data-vaccine.json').subscribe(data => {
      this.entry = data.records.find((record: any[]) => record[0] === id);

      if (this.entry) {
        this.entry[1] = new Date(this.entry[1].replace(/ : /g, ':'));
      }
    });
  }

  async saveMessage(): Promise<void> {
    if (this.user_message.trim()) {
      const formattedDate = this.entry
        ? this.date_pipe.transform(this.entry[1], 'yyyy-MM-dd')
        : '';

      this.message_service.addMessage(formattedDate || '', this.user_message);

      await this.presentAlert("Message saved!", `Your message has been saved:\n${this.user_message}`);
      this.user_message = '';
    }
  }

  async presentAlert(header: string, message: string): Promise<void> {
    const alert = await this.alert_controller.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
