import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUpdatesComponent } from './c-updates/c-updates.component';
import { CStatusComponent } from './c-status/c-status.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations : [
    CUpdatesComponent,
    CStatusComponent
  ],
  imports : [
    CommonModule,
    IonicModule
  ],
  exports : [
    CUpdatesComponent,
    CStatusComponent
  ]
})
export class ComponentsModule { }
