import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status/status.component';
import { UpdatesComponent } from './updates/updates.component';


@NgModule({
  declarations: [
    StatusComponent,
    UpdatesComponent
  ],
  imports: [ CommonModule ],
  exports: [
    StatusComponent,
    UpdatesComponent
  ]
})
export class ComponentsModule { }
