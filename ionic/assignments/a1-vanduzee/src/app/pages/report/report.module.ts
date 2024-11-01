import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportPageRoutingModule } from './report-routing.module';

import { ReportPage } from './report.page';
import { provideHttpClient } from '@angular/common/http';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  providers : [
    provideHttpClient(),
    DatePipe
  ],
  imports : [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportPageRoutingModule,
    ComponentsModule
  ],
  declarations : [ReportPage]
})
export class ReportPageModule {}
