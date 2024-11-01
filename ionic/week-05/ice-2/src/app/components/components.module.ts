import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Comp1Component } from './comp-1/comp-1.component';
import { Comp2Component } from './comp-2/comp-2.component';



@NgModule({
  declarations: [
    Comp1Component,
    Comp2Component
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    Comp1Component,
    Comp2Component
  ]
})
export class ComponentsModule { }
