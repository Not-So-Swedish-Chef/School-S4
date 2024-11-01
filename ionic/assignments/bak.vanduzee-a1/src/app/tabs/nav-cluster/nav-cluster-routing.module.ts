import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavClusterPage } from './nav-cluster.page';

const routes: Routes = [
  {
    path: '',
    component: NavClusterPage,
    children: [
      {
        path: 'Canada_Summary',
        loadChildren: () => import('../canada-summary/canada-summary.module').then(m => m.CanadaSummaryPageModule)
      },
      {
        path: 'Ontario',
        loadChildren: () => import('../ontario/ontario.module').then(m => m.OntarioPageModule)
      },
      {
        path: '',
        redirectTo: 'Canada_Summary',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavClusterPageRoutingModule {}
