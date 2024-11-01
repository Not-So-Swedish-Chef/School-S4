import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OntarioPageRoutingModule } from './ontario-routing.module';

import { OntarioPage } from './ontario.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OntarioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OntarioPage]
})
export class OntarioPageModule {}
