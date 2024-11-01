import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  { path : '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path : 'report', loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule) }
];
@NgModule({
  imports : [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ]
})
export class AppRoutingModule {}
