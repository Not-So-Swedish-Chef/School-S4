import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';



@NgModule({
  declarations: [
    AComponent,
    BComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    AComponent,
    BComponent
  ]
})
export class ComponentsModule { }
