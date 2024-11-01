import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavClusterPageRoutingModule } from './nav-cluster-routing.module';

import { NavClusterPage } from './nav-cluster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavClusterPageRoutingModule
  ],
  declarations: [NavClusterPage]
})
export class NavClusterPageModule {}
