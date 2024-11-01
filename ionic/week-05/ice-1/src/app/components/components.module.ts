import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';



@NgModule({
  declarations: [
    CompAComponent,
    CompBComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    CompAComponent,
    CompBComponent
  ]
})
export class ComponentsModule { }
