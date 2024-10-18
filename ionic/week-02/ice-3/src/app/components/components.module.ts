import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    C1Component,
    C2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    C1Component,
    C2Component
  ]
})
export class ComponentsModule { }
