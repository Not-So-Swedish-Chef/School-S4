import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StaticData } from 'src/assets/data/StaticData';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'page1/:param',
    loadChildren: () => import('./pages/page1/page1.module').then( m => m.Page1PageModule),
    /*data : {title:'Static Data', desc:'Sample static data here (data found in app-routing).'} */
     data : StaticData
  },
  {
    path: 'page2',
    loadChildren: () => import('./pages/page2/page2.module').then( m => m.Page2PageModule)
  },
  {
    path: 'page3',
    loadChildren: () => import('./pages/page3/page3.module').then( m => m.Page3PageModule)
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
