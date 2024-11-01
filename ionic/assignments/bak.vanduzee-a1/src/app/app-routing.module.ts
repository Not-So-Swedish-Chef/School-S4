import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/nav-cluster/nav-cluster.module').then(m => m.NavClusterPageModule)
  },
  {
    path: 'case-status',
    loadChildren: () => import('./pages/case-status/case-status.module').then( m => m.CaseStatusPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
