import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanadaSummaryPage } from './canada-summary.page';

const routes: Routes = [
  {
    path: '',
    component: CanadaSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanadaSummaryPageRoutingModule {}
