import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanadaSummaryPageRoutingModule } from './canada-summary-routing.module';

import { CanadaSummaryPage } from './canada-summary.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanadaSummaryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CanadaSummaryPage]
})
export class CanadaSummaryPageModule {}
